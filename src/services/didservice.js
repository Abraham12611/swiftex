import { Web5 } from '@web5/api';
import { VerifiableCredential } from '@web5/credentials';

let web5Instance = null;

// Initialize Web5 instance once and reuse it
const initializeWeb5 = async () => {
  if (!web5Instance) {
    const { web5 } = await Web5.connect();
    web5Instance = web5;
  }
  return web5Instance;
};

// Create a DID for the user
export const createDID = async () => {
  const web5 = await initializeWeb5(); // Ensure web5 is initialized
  const { did } = await web5.did.create();
  console.log('Generated DID:', did);
  return did;
};

// Request Verifiable Credential (VC) for the DID
export const requestVC = async (did, name) => {
  const web5 = await initializeWeb5(); // Ensure web5 is initialized
  const vc = await VerifiableCredential.create({
    type: 'SwiftExCredential',
    issuer: did,
    subject: did,
    data: {
      name: name,
      completionDate: new Date().toISOString(),
      expertiseLevel: 'Beginner',
    },
  });

  const { did: bearerDid } = await web5.agent.identity.get({ didUri: did });
  const signedVc = await vc.sign({ did: bearerDid });
  console.log('Signed VC:', signedVc);

  const { record } = await web5.dwn.records.create({
    data: signedVc,
    message: {
      schema: 'SwiftExCredential',
      dataFormat: 'application/vc+jwt',
      published: true,
    },
  });

  const readSignedVc = await record.data.text();
  const parsedVc = VerifiableCredential.parseJwt({ vcJwt: readSignedVc });
  console.log('Parsed VC:', parsedVc);

  return { status: 'verified', vc: parsedVc };
};
