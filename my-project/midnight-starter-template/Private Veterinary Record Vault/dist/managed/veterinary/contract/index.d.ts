export function ledger(stateOrChargedState: any): {
    readonly isVaccinated: boolean;
};
export class Contract {
    constructor(...args_0: any[]);
    witnesses: any;
    circuits: {
        markAsVaccinated: (...args_1: any[]) => {
            result: any[];
            context: any;
            proofData: {
                input: {
                    value: never[];
                    alignment: never[];
                };
                output: undefined;
                publicTranscript: never[];
                privateTranscriptOutputs: never[];
            };
            gasCost: any;
        };
        checkStatus: (...args_1: any[]) => {
            result: boolean;
            context: any;
            proofData: {
                input: {
                    value: never[];
                    alignment: never[];
                };
                output: undefined;
                publicTranscript: never[];
                privateTranscriptOutputs: never[];
            };
            gasCost: any;
        };
    };
    impureCircuits: {
        markAsVaccinated: (...args_1: any[]) => {
            result: any[];
            context: any;
            proofData: {
                input: {
                    value: never[];
                    alignment: never[];
                };
                output: undefined;
                publicTranscript: never[];
                privateTranscriptOutputs: never[];
            };
            gasCost: any;
        };
        checkStatus: (...args_1: any[]) => {
            result: boolean;
            context: any;
            proofData: {
                input: {
                    value: never[];
                    alignment: never[];
                };
                output: undefined;
                publicTranscript: never[];
                privateTranscriptOutputs: never[];
            };
            gasCost: any;
        };
    };
    initialState(...args_0: any[]): {
        currentContractState: __compactRuntime.ContractState;
        currentPrivateState: any;
        currentZswapLocalState: __compactRuntime.EncodedZswapLocalState;
    };
    _markAsVaccinated_0(context: any, partialProofData: any): never[];
    _checkStatus_0(context: any, partialProofData: any): boolean;
}
export const pureCircuits: {};
export namespace contractReferenceLocations {
    let tag: string;
    let indices: {};
}
import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
