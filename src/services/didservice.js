import { Web5 } from '@web5/api';
import { VerifiableCredential } from '@web5/credentials';

// Initialize Web5 instance
const { web5 } = await Web5.connect();

// Create a DID for the user
export const createDID = async () => {
  try {
    // Generate a new DID
    const { did } = await web5.did.create();
    console.log('Generated DID:', did);  // Debugging output
    return did;
  } catch (error) {
    throw new Error('DID creation failed: ' + error.message);
  }
};

// Request Verifiable Credential (VC) for the DID
export const requestVC = async (did, name) => {
  try {
    // Create a self-signed Verifiable Credential
    const vc = await VerifiableCredential.create({
      type: 'SwiftExCredential',
      issuer: did,
      subject: did,
      data: {
        name: name,  // Use the name collected from the user
        completionDate: new Date().toISOString(),
        expertiseLevel: 'Beginner'
      }
    });

    // Retrieve Bearer DID for signing the VC
    const { did: bearerDid } = await web5.agent.identity.get({ didUri: did });

    // Sign the VC
    const signedVc = await vc.sign({ did: bearerDid });
    console.log('Signed VC:', signedVc);  // Debugging output

    // Store VC in DWN (Decentralized Web Node)
    const { record } = await web5.dwn.records.create({
      data: signedVc,
      message: {
        schema: 'SwiftExCredential',
        dataFormat: 'application/vc+jwt',
        published: true
      }
    });

    // Read the signed VC from DWN
    const readSignedVc = await record.data.text();

    // Parse VC
    const parsedVc = VerifiableCredential.parseJwt({ vcJwt: readSignedVc });
    console.log('Parsed VC:', parsedVc);  // Debugging output

    // Return the parsed VC as the verification response
    return { status: 'verified', vc: parsedVc };
  } catch (error) {
    throw new Error('VC issuance failed: ' + error.message);
  }
};
