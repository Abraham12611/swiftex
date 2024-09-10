import { DidResolver, DID } from '@tbd54566975/web5'; // Ensure tbDEX SDK is properly installed

export const createDID = async () => {
  try {
    const newDID = await DID.create(); // Generate a new DID using tbDEX SDK
    return newDID.did;
  } catch (error) {
    throw new Error('DID creation failed');
  }
};

export const requestVC = async (did) => {
  try {
    // Implement the logic to request a Verifiable Credential (VC) based on the DID
    const vcResponse = await DidResolver.issueVC(did); // Adjust this according to tbDEX's VC issuance API
    return vcResponse;
  } catch (error) {
    throw new Error('VC issuance failed');
  }
};
