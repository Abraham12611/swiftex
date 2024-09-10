import { Web5 } from '@tbd54566975/web5';

// Initialize Web5 instance
const web5 = new Web5();

export const createDID = async () => {
  try {
    // Generate a new DID
    const { did } = await web5.did.create();
    return did;
  } catch (error) {
    throw new Error('DID creation failed');
  }
};

export const requestVC = async (did) => {
  try {
    // Logic to request Verifiable Credential (VC)
    const vcResponse = await web5.vc.issue({ subject: did });
    return vcResponse;
  } catch (error) {
    throw new Error('VC issuance failed');
  }
};
