import { ChainId } from '@ubeswap/sdk-core'
import { BigNumber } from 'ethers'

type ChainConfig = {
  router: string // the universal router
  creationBlock: number
  weth: string
}

const WETH_NOT_SUPPORTED_ON_CHAIN = '0x0000000000000000000000000000000000000000'

const STANDARD_WRAPPED_NATIVE = '0x4200000000000000000000000000000000000006'

const CHAIN_CONFIGS: { [key: number]: ChainConfig } = {
  // mainnet
  [1]: {
    router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    creationBlock: 17143817,
  },
  // celo
  [42220]: {
    router: '0x3C255DED9B25f0BFB4EF1D14234BD2514d7A7A0d',
    weth: WETH_NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 25670593,
  },
  // celo alfajores
  [44787]: {
    router: '0x3C255DED9B25f0BFB4EF1D14234BD2514d7A7A0d',
    weth: WETH_NOT_SUPPORTED_ON_CHAIN,
    creationBlock: 25670593,
  },
  // ink sepolia
  [763373]: {
    router: '0xF8123977EbC310cB0B2f8B8E54F9feCEa5489A92',
    weth: STANDARD_WRAPPED_NATIVE,
    creationBlock: 4487208,
  },
}

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId]!.router
}

export const UNIVERSAL_ROUTER_CREATION_BLOCK = (chainId: number): number => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId]!.creationBlock
}

export const WETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId]!.weth == WETH_NOT_SUPPORTED_ON_CHAIN)
    throw new Error(`Chain ${chainId} does not have WETH`)

  return CHAIN_CONFIGS[chainId]!.weth
}

export const PERMIT2_ADDRESS = (chainId: number | undefined) => {
  if (chainId === ChainId.INK_SEPOLIA) {
    return '0xE3709aB08457c8eDb0c0ee4c4F9193B39efC0769'
  }
  // use official Uniswap deployed as default
  return '0x000000000022D473030F116dDEE9F6B43aC78BA3'
}

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
