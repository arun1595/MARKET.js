import {
  getAddressWhiteListAsync,
  getCollateralPoolContractAddressAsync
} from '../src/lib/Contract';

/**
 * Contract
 */
describe('Contract class', () => {
  it('Contract has getAddressWhiteListAsync function', () => {
    expect(typeof getAddressWhiteListAsync).toEqual('function');
  });
  it('Contract has getCollateralPoolContractAddressAsync function', () => {
    expect(typeof getCollateralPoolContractAddressAsync).toEqual('function');
  });
});
