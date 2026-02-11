/* eslint-disable */
// @generated
// This file is a stub generated to satisfy TypeScript compilation.
// It provides type stubs matching what graphql-codegen would produce.

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

const defaultOptions = {} as const

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type InputMaybe<T> = T
export type Maybe<T> = T
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AWSJSON: string
}

// ===== Enums =====

export enum ActivityType {
  Approve = 'APPROVE',
  Borrow = 'BORROW',
  Burn = 'BURN',
  Cancel = 'CANCEL',
  Claim = 'CLAIM',
  Deployment = 'DEPLOYMENT',
  Lend = 'LEND',
  Mint = 'MINT',
  Nft = 'NFT',
  Receive = 'RECEIVE',
  Repay = 'REPAY',
  Send = 'SEND',
  Stake = 'STAKE',
  Swap = 'SWAP',
  SwapOrder = 'SWAP_ORDER',
  Staking = 'STAKING',
  Unknown = 'UNKNOWN',
  Unstake = 'UNSTAKE',
  Withdraw = 'WITHDRAW',
}

export enum Chain {
  Ethereum = 'ETHEREUM',
  EthereumGoerli = 'ETHEREUM_GOERLI',
  EthereumSepolia = 'ETHEREUM_SEPOLIA',
  Polygon = 'POLYGON',
  Celo = 'CELO',
  Optimism = 'OPTIMISM',
  Arbitrum = 'ARBITRUM',
  Bnb = 'BNB',
  Avalanche = 'AVALANCHE',
  Base = 'BASE',
  UnknownChain = 'UNKNOWN_CHAIN',
}

export enum CollectionSortableField {
  Volume = 'VOLUME',
}

export enum Currency {
  Usd = 'USD',
  Aud = 'AUD',
  Brl = 'BRL',
  Cad = 'CAD',
  Eur = 'EUR',
  Gbp = 'GBP',
  Hkd = 'HKD',
  Idr = 'IDR',
  Inr = 'INR',
  Jpy = 'JPY',
  Ngn = 'NGN',
  Pkr = 'PKR',
  Rub = 'RUB',
  Sgd = 'SGD',
  Thb = 'THB',
  Try = 'TRY',
  Uah = 'UAH',
  Vnd = 'VND',
  Eth = 'ETH',
}

export enum HighLow {
  High = 'HIGH',
  Low = 'LOW',
}

export enum HistoryDuration {
  Hour = 'HOUR',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
  Max = 'MAX',
  FiveMinute = 'FIVE_MINUTE',
}

export enum MediaType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Audio = 'AUDIO',
  Raw = 'RAW',
}

export enum NftActivityType {
  Listing = 'LISTING',
  Sale = 'SALE',
  Transfer = 'TRANSFER',
  CancelListing = 'CANCEL_LISTING',
}

export enum NftAssetSortableField {
  Price = 'PRICE',
  Rarity = 'RARITY',
}

export enum NftMarketplace {
  Opensea = 'OPENSEA',
  LooksRare = 'LOOKSRARE',
  X2Y2 = 'X2Y2',
  SudoSwap = 'SUDOSWAP',
  Nft20 = 'NFT20',
  Nftx = 'NFTX',
  Cryptopunks = 'CRYPTOPUNKS',
  Foundation = 'FOUNDATION',
}

export enum NftStandard {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155',
}

export enum OrderStatus {
  Valid = 'VALID',
  Executed = 'EXECUTED',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
}

export enum OrderType {
  Listing = 'LISTING',
  Offer = 'OFFER',
}

export enum SafetyLevel {
  Verified = 'VERIFIED',
  MediumWarning = 'MEDIUM_WARNING',
  StrongWarning = 'STRONG_WARNING',
  Blocked = 'BLOCKED',
}

export enum SwapOrderStatus {
  Open = 'OPEN',
  Expired = 'EXPIRED',
  Error = 'ERROR',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
}

export enum TokenSortableField {
  Volume = 'VOLUME',
  TotalValueLocked = 'TOTAL_VALUE_LOCKED',
  MarketCap = 'MARKET_CAP',
  Popularity = 'POPULARITY',
}

export enum TokenStandard {
  Native = 'NATIVE',
  Erc20 = 'ERC20',
}

export enum TransactionDirection {
  In = 'IN',
  Out = 'OUT',
  Self = 'SELF',
}

export enum TransactionStatus {
  Pending = 'PENDING',
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
}

export enum TransactionType {
  Approve = 'APPROVE',
  Borrow = 'BORROW',
  Cancel = 'CANCEL',
  Claim = 'CLAIM',
  Deployment = 'DEPLOYMENT',
  Lend = 'LEND',
  Mint = 'MINT',
  Receive = 'RECEIVE',
  Repay = 'REPAY',
  Send = 'SEND',
  Stake = 'STAKE',
  Swap = 'SWAP',
  Unknown = 'UNKNOWN',
  Unstake = 'UNSTAKE',
  Withdraw = 'WITHDRAW',
}

export enum TokenTradeType {
  ExactInput = 'EXACT_INPUT',
  ExactOutput = 'EXACT_OUTPUT',
}

// ===== Input types =====

export type ContractInput = {
  readonly chain: Chain
  readonly address?: string
}

export type NftActivityFilterInput = {
  readonly activityTypes?: ReadonlyArray<NftActivityType>
  readonly address?: string
  readonly tokenId?: string
}

export type NftAssetTraitInput = {
  readonly name: string
  readonly values: ReadonlyArray<string>
}

export type NftAssetsFilterInput = {
  readonly listed?: boolean
  readonly marketplaces?: ReadonlyArray<NftMarketplace>
  readonly maxPrice?: string
  readonly minPrice?: string
  readonly tokenIds?: ReadonlyArray<string>
  readonly tokenSearchQuery?: string
  readonly traits?: ReadonlyArray<NftAssetTraitInput>
}

export type NftBalancesFilterInput = {
  readonly addresses?: ReadonlyArray<string>
  readonly assets?: ReadonlyArray<NftBalanceAssetInput>
}

export type NftBalanceAssetInput = {
  readonly address: string
  readonly tokenId: string
}

export type NftTradeInput = {
  readonly amount: number
  readonly contractAddress: string
  readonly id: string
  readonly marketplace: NftMarketplace
  readonly quotePrice?: TokenAmountInput
  readonly tokenId: string
  readonly tokenType?: NftStandard
}

export type TokenAmountInput = {
  readonly amount: string
  readonly token: TokenInput
}

export type TokenInput = {
  readonly address: string
  readonly chainId: number
  readonly decimals: number
  readonly isNative: boolean
}

export type PermitInput = {
  readonly details: PermitDetailsInput
  readonly sigDeadline: string
  readonly signature: string
  readonly spender: string
}

export type PermitDetailsInput = {
  readonly amount: string
  readonly expiration: string
  readonly nonce: string
  readonly token: string
}

export type TokenTradeRoutesInput = {
  readonly mixedRoutes?: ReadonlyArray<TokenTradeRouteInput>
  readonly tradeType: TokenTradeType
  readonly v2Routes?: ReadonlyArray<TokenTradeRouteInput>
  readonly v3Routes?: ReadonlyArray<TokenTradeRouteInput>
}

export type TokenTradeRouteInput = {
  readonly inputAmount: TokenAmountInput
  readonly outputAmount: TokenAmountInput
  readonly pools: ReadonlyArray<TradePoolInput>
}

export type TradePoolInput = {
  readonly pair?: PairInput
  readonly pool?: PoolInput
}

export type PairInput = {
  readonly tokenAmountA: TokenAmountInput
  readonly tokenAmountB: TokenAmountInput
}

export type PoolInput = {
  readonly fee: number
  readonly liquidity: string
  readonly sqrtRatioX96: string
  readonly tickCurrent: string
  readonly tokenA: TokenInput
  readonly tokenB: TokenInput
}

export type TokenTradeInput = {
  readonly permit?: PermitInput
  readonly routes: TokenTradeRoutesInput
  readonly slippageToleranceBasisPoints: number
  readonly tokenAmount: TokenAmountInput
}

// ===== Object types =====

export type Amount = {
  readonly __typename?: 'Amount'
  readonly id: string
  readonly value: any
  readonly currency?: any
}

export type TimestampedAmount = {
  readonly __typename?: 'TimestampedAmount'
  readonly id: string
  readonly timestamp: number
  readonly value: number
}

export type TokenMarket = {
  readonly __typename?: 'TokenMarket'
  readonly id: string
  readonly price?: Amount
  readonly pricePercentChange?: Amount
  readonly priceHistory?: ReadonlyArray<TimestampedAmount>
  readonly volume?: Amount
  readonly volume24H?: Amount
  readonly totalValueLocked?: Amount
  readonly priceHighLow?: Amount
  readonly priceHigh52W?: Amount
  readonly priceLow52W?: Amount
}

export type TokenProjectMarket = {
  readonly __typename?: 'TokenProjectMarket'
  readonly id: string
  readonly price?: Amount
  readonly pricePercentChange?: Amount
  readonly priceHistory?: ReadonlyArray<TimestampedAmount>
  readonly currency?: Currency
  readonly tokenProject: TokenProject
}

export type TokenProject = {
  readonly __typename?: 'TokenProject'
  readonly id: string
  readonly description?: string
  readonly homepageUrl?: string
  readonly twitterName?: string
  readonly logoUrl?: string
  readonly tokens: ReadonlyArray<Token>
  readonly isSpam?: boolean
  readonly logo?: Image
  readonly markets?: ReadonlyArray<TokenProjectMarket>
  readonly safetyLevel?: SafetyLevel
}

export type Token = {
  readonly __typename?: 'Token'
  readonly id: string
  readonly decimals?: number
  readonly name?: string
  readonly chain: Chain
  readonly address?: string
  readonly symbol?: string
  readonly standard?: TokenStandard
  readonly market?: TokenMarket
  readonly project?: TokenProject
}

export type Image = {
  readonly __typename?: 'Image'
  readonly id: string
  readonly url: string
}

export type NftContract = {
  readonly __typename?: 'NftContract'
  readonly id?: string
  readonly chain: Chain
  readonly address: string
  readonly name?: string
  readonly standard?: NftStandard
  readonly symbol?: string
  readonly totalSupply?: number
}

export type NftCollectionMarket = {
  readonly __typename?: 'NftCollectionMarket'
  readonly id?: string
  readonly floorPrice?: Amount
  readonly owners?: number
  readonly totalVolume?: Amount
  readonly listings?: Amount
  readonly volume?: Amount
  readonly volumePercentChange?: Amount
  readonly floorPricePercentChange?: Amount
  readonly sales?: Amount
  readonly marketplaces?: ReadonlyArray<NftCollectionMarketplace>
}

export type NftCollectionMarketplace = {
  readonly __typename?: 'NftCollectionMarketplace'
  readonly marketplace?: NftMarketplace
  readonly listings?: number
  readonly floorPrice?: number
}

export type NftCollectionTrait = {
  readonly __typename?: 'NftCollectionTrait'
  readonly name?: string
  readonly values?: ReadonlyArray<string>
  readonly stats?: ReadonlyArray<NftCollectionTraitStats>
}

export type NftCollectionTraitStats = {
  readonly __typename?: 'NftCollectionTraitStats'
  readonly name?: string
  readonly value?: string
  readonly assets?: number
  readonly listings?: number
}

export type NftCollection = {
  readonly __typename?: 'NftCollection'
  readonly collectionId?: string
  readonly bannerImage?: Image
  readonly description?: string
  readonly discordUrl?: string
  readonly homepageUrl?: string
  readonly image?: Image
  readonly instagramName?: string
  readonly isVerified?: boolean
  readonly name?: string
  readonly numAssets?: number
  readonly twitterName?: string
  readonly nftContracts?: ReadonlyArray<NftContract>
  readonly traits?: ReadonlyArray<NftCollectionTrait>
  readonly markets?: ReadonlyArray<NftCollectionMarket>
  readonly creator?: NftProfile
}

export type NftCollectionEdge = {
  readonly __typename?: 'NftCollectionEdge'
  readonly cursor: string
  readonly node: NftCollection
}

export type NftCollectionConnection = {
  readonly __typename?: 'NftCollectionConnection'
  readonly edges: ReadonlyArray<NftCollectionEdge>
  readonly pageInfo: PageInfo
}

export type NftProfile = {
  readonly __typename?: 'NftProfile'
  readonly address?: string
  readonly profileImage?: Image
  readonly isVerified?: boolean
}

export type NftAssetRarity = {
  readonly __typename?: 'NftAssetRarity'
  readonly id?: string
  readonly provider?: string
  readonly rank?: number
  readonly score?: number
}

export type NftAssetTrait = {
  readonly __typename?: 'NftAssetTrait'
  readonly name?: string
  readonly value?: string
}

export type NftOrder = {
  readonly __typename?: 'NftOrder'
  readonly address: string
  readonly createdAt: number
  readonly endAt?: number
  readonly id: string
  readonly maker: string
  readonly marketplace: NftMarketplace
  readonly marketplaceUrl: string
  readonly orderHash?: string
  readonly price: Amount
  readonly quantity: number
  readonly startAt: number
  readonly status: OrderStatus
  readonly taker?: string
  readonly tokenId?: string
  readonly type: OrderType
  readonly protocolParameters?: Scalars['AWSJSON']
}

export type NftOrderEdge = {
  readonly __typename?: 'NftOrderEdge'
  readonly cursor: string
  readonly node: NftOrder
}

export type NftOrderConnection = {
  readonly __typename?: 'NftOrderConnection'
  readonly edges: ReadonlyArray<NftOrderEdge>
}

export type NftAsset = {
  readonly __typename?: 'NftAsset'
  readonly id: string
  readonly name?: string
  readonly ownerAddress?: string
  readonly image?: Image
  readonly smallImage?: Image
  readonly originalImage?: Image
  readonly tokenId: string
  readonly description?: string
  readonly animationUrl?: string
  readonly suspiciousFlag?: boolean
  readonly creator?: NftProfile
  readonly collection?: NftCollection
  readonly listings?: NftOrderConnection
  readonly rarities?: ReadonlyArray<NftAssetRarity>
  readonly metadataUrl?: string
  readonly traits?: ReadonlyArray<NftAssetTrait>
  readonly thumbnail?: Image
  readonly nftContract?: NftContract
  readonly flaggedBy?: string
  readonly mediaType?: MediaType
}

export type NftAssetEdge = {
  readonly __typename?: 'NftAssetEdge'
  readonly cursor: string
  readonly node: NftAsset
}

export type NftAssetConnection = {
  readonly __typename?: 'NftAssetConnection'
  readonly edges: ReadonlyArray<NftAssetEdge>
  readonly totalCount?: number
  readonly pageInfo: PageInfo
}

export type PageInfo = {
  readonly __typename?: 'PageInfo'
  readonly endCursor?: string
  readonly hasNextPage?: boolean
  readonly hasPreviousPage?: boolean
  readonly startCursor?: string
}

export type NftTrade = {
  readonly __typename?: 'NftTrade'
  readonly id: string
  readonly contractAddress: string
  readonly tokenId: string
  readonly tokenType: NftStandard
  readonly marketplace: NftMarketplace
  readonly amount: number
  readonly price: Amount
  readonly quotePrice?: Amount
}

export type NftRouteResponse = {
  readonly __typename?: 'NftRouteResponse'
  readonly id: string
  readonly calldata: string
  readonly route: ReadonlyArray<NftTrade>
  readonly sendAmount: Amount
  readonly toAddress: string
}

export type NftActivity = {
  readonly __typename?: 'NftActivity'
  readonly id: string
  readonly address: string
  readonly tokenId?: string
  readonly asset?: NftAsset
  readonly type: NftActivityType
  readonly marketplace?: NftMarketplace
  readonly fromAddress: string
  readonly toAddress?: string
  readonly transactionHash?: string
  readonly price?: Amount
  readonly orderStatus?: OrderStatus
  readonly quantity?: number
  readonly url?: string
  readonly timestamp: number
}

export type NftActivityEdge = {
  readonly __typename?: 'NftActivityEdge'
  readonly cursor: string
  readonly node: NftActivity
}

export type NftActivityConnection = {
  readonly __typename?: 'NftActivityConnection'
  readonly edges: ReadonlyArray<NftActivityEdge>
  readonly pageInfo: PageInfo
}

export type NftBalanceEntry = {
  readonly __typename?: 'NftBalance'
  readonly ownedAsset?: NftAsset
  readonly listedMarketplaces?: ReadonlyArray<NftMarketplace>
  readonly listingFees?: ReadonlyArray<NftFee>
  readonly lastPrice?: TimestampedAmount
}

export type NftFee = {
  readonly __typename?: 'NftFee'
  readonly id: string
  readonly payoutAddress: string
  readonly basisPoints: number
}

export type NftBalanceEdge = {
  readonly __typename?: 'NftBalanceEdge'
  readonly cursor: string
  readonly node: NftBalanceEntry
}

export type NftBalanceConnection = {
  readonly __typename?: 'NftBalanceConnection'
  readonly edges: ReadonlyArray<NftBalanceEdge>
  readonly pageInfo: PageInfo
}

export type TokenBalance = {
  readonly __typename?: 'TokenBalance'
  readonly id: string
  readonly ownerAddress: string
  readonly quantity?: number
  readonly denominatedValue?: Amount
  readonly tokenProjectMarket?: TokenProjectMarket
  readonly token?: Token
}

export type Portfolio = {
  readonly __typename?: 'Portfolio'
  readonly id: string
  readonly tokensTotalDenominatedValue?: Amount
  readonly tokensTotalDenominatedValueChange?: { readonly absolute?: Amount; readonly percentage?: Amount }
  readonly tokenBalances?: ReadonlyArray<TokenBalance>
  readonly assetActivities?: ReadonlyArray<AssetActivityPartsFragment>
}

export type Transaction = {
  readonly __typename?: 'Transaction'
  readonly id: string
  readonly blockNumber: number
  readonly hash: string
  readonly status: TransactionStatus
  readonly to: string
  readonly from: string
  readonly nonce: number
}

// ===== Fragment types =====

export type NftAssetPartsFragment = {
  readonly __typename?: 'NftAsset'
  readonly id: string
  readonly name?: string
  readonly nftContract?: { readonly __typename?: 'NftContract'; readonly id?: string; readonly chain: Chain; readonly address: string }
  readonly tokenId: string
  readonly image?: { readonly __typename?: 'Image'; readonly id: string; readonly url: string }
  readonly collection?: { readonly __typename?: 'NftCollection'; readonly id?: string; readonly name?: string }
}

export type NftTransferPartsFragment = {
  readonly __typename?: 'NftTransfer'
  readonly id: string
  readonly asset: NftAssetPartsFragment
  readonly nftStandard: NftStandard
  readonly sender: string
  readonly recipient: string
  readonly direction: string
}

export type TokenAssetPartsFragment = {
  readonly __typename?: 'Token'
  readonly id: string
  readonly name?: string
  readonly symbol?: string
  readonly address?: string
  readonly decimals?: number
  readonly chain: Chain
  readonly standard?: TokenStandard
  readonly project?: {
    readonly __typename?: 'TokenProject'
    readonly id: string
    readonly isSpam?: boolean
    readonly logo?: { readonly __typename?: 'Image'; readonly id: string; readonly url: string }
  }
}

export type TokenTransferPartsFragment = {
  readonly __typename?: 'TokenTransfer'
  readonly id: string
  readonly asset: TokenAssetPartsFragment
  readonly tokenStandard: TokenStandard
  readonly quantity: string
  readonly sender: string
  readonly recipient: string
  readonly direction: string
  readonly transactedValue?: Amount
}

export type TokenApprovalPartsFragment = {
  readonly __typename?: 'TokenApproval'
  readonly id: string
  readonly asset: TokenAssetPartsFragment
  readonly tokenStandard: TokenStandard
  readonly approvedAddress: string
  readonly quantity: string
}

export type NftApprovalPartsFragment = {
  readonly __typename?: 'NftApproval'
  readonly id: string
  readonly asset: NftAssetPartsFragment
  readonly nftStandard: NftStandard
  readonly approvedAddress: string
}

export type NftApproveForAllPartsFragment = {
  readonly __typename?: 'NftApproveForAll'
  readonly id: string
  readonly asset: NftAssetPartsFragment
  readonly nftStandard: NftStandard
  readonly operatorAddress: string
  readonly approved: boolean
}

export type TransactionDetailsPartsFragment = {
  readonly __typename: 'TransactionDetails'
  readonly id: string
  readonly type: TransactionType
  readonly from: string
  readonly to: string
  readonly hash: string
  readonly nonce: number
  readonly status: TransactionStatus
  readonly assetChanges: ReadonlyArray<
    | ({ readonly __typename: 'TokenTransfer' } & TokenTransferPartsFragment)
    | ({ readonly __typename: 'NftTransfer' } & NftTransferPartsFragment)
    | ({ readonly __typename: 'TokenApproval' } & TokenApprovalPartsFragment)
    | ({ readonly __typename: 'NftApproval' } & NftApprovalPartsFragment)
    | ({ readonly __typename: 'NftApproveForAll' } & NftApproveForAllPartsFragment)
  >
}

export type SwapOrderDetailsPartsFragment = {
  readonly __typename: 'SwapOrderDetails'
  readonly id: string
  readonly offerer: string
  readonly hash: string
  readonly orderStatus: SwapOrderStatus
  readonly inputToken: TokenAssetPartsFragment
  readonly inputTokenQuantity: string
  readonly outputToken: TokenAssetPartsFragment
  readonly outputTokenQuantity: string
}

export type AssetActivityPartsFragment = {
  readonly __typename?: 'AssetActivity'
  readonly id: string
  readonly timestamp: number
  readonly chain: Chain
  readonly details: TransactionDetailsPartsFragment | SwapOrderDetailsPartsFragment
}

// ===== Query types =====

export type TokenQuery = {
  readonly __typename?: 'Query'
  readonly token?: Token
}

export type TokenQueryVariables = Exact<{
  chain: Chain
  address?: string
}>

export type TokenPriceQuery = {
  readonly __typename?: 'Query'
  readonly token?: {
    readonly __typename?: 'Token'
    readonly id: string
    readonly address?: string
    readonly chain: Chain
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly price?: Amount
      readonly priceHistory?: ReadonlyArray<TimestampedAmount>
    }
  }
}

export type TokenPriceQueryVariables = Exact<{
  chain: Chain
  address?: string
  duration: HistoryDuration
}>

export type UniswapPricesQuery = {
  readonly __typename?: 'Query'
  readonly tokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly address?: string
    readonly chain: Chain
    readonly standard?: TokenStandard
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly markets?: ReadonlyArray<{
        readonly __typename?: 'TokenProjectMarket'
        readonly id: string
        readonly price?: Amount
      }>
    }
  }>
}

export type UniswapPricesQueryVariables = Exact<{
  contracts: ReadonlyArray<ContractInput>
}>

export type SearchTokensQuery = {
  readonly __typename?: 'Query'
  readonly searchTokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly decimals?: number
    readonly name?: string
    readonly chain: Chain
    readonly standard?: TokenStandard
    readonly address?: string
    readonly symbol?: string
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly price?: Amount
      readonly pricePercentChange?: Amount
      readonly volume24H?: Amount
    }
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly logoUrl?: string
      readonly safetyLevel?: SafetyLevel
    }
  }>
}

export type SearchTokensQueryVariables = Exact<{
  searchQuery: string
}>

export type TrendingTokensQuery = {
  readonly __typename?: 'Query'
  readonly topTokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly decimals?: number
    readonly name?: string
    readonly chain: Chain
    readonly standard?: TokenStandard
    readonly address?: string
    readonly symbol?: string
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly price?: Amount
      readonly pricePercentChange?: Amount
      readonly volume24H?: Amount
    }
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly logoUrl?: string
      readonly safetyLevel?: SafetyLevel
    }
  }>
}

export type TrendingTokensQueryVariables = Exact<{
  chain: Chain
}>

export type TokenSpotPriceQuery = {
  readonly __typename?: 'Query'
  readonly token?: {
    readonly __typename?: 'Token'
    readonly id: string
    readonly address?: string
    readonly chain: Chain
    readonly name?: string
    readonly symbol?: string
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly markets?: ReadonlyArray<{
        readonly __typename?: 'TokenProjectMarket'
        readonly id: string
        readonly price?: Amount
      }>
    }
  }
}

export type TokenSpotPriceQueryVariables = Exact<{
  chain: Chain
  address?: string
}>

export type TopTokens100Query = {
  readonly __typename?: 'Query'
  readonly topTokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly name?: string
    readonly chain: Chain
    readonly address?: string
    readonly symbol?: string
    readonly standard?: TokenStandard
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly totalValueLocked?: Amount
      readonly price?: Amount
      readonly pricePercentChange?: Amount
      readonly volume?: Amount
    }
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly logoUrl?: string
    }
  }>
}

export type TopTokens100QueryVariables = Exact<{
  duration: HistoryDuration
  chain: Chain
}>

export type TopTokensSparklineQuery = {
  readonly __typename?: 'Query'
  readonly topTokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly address?: string
    readonly chain: Chain
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly priceHistory?: ReadonlyArray<TimestampedAmount>
    }
  }>
}

export type TopTokensSparklineQueryVariables = Exact<{
  duration: HistoryDuration
  chain: Chain
}>

export type PortfolioBalancesQuery = {
  readonly __typename?: 'Query'
  readonly portfolios?: ReadonlyArray<Portfolio>
}

export type PortfolioBalancesQueryVariables = Exact<{
  ownerAddress: string
  chains: ReadonlyArray<Chain>
}>

export type ActivityQuery = {
  readonly __typename?: 'Query'
  readonly portfolios?: ReadonlyArray<{
    readonly __typename?: 'Portfolio'
    readonly id: string
    readonly assetActivities?: ReadonlyArray<AssetActivityPartsFragment>
  }>
}

export type ActivityQueryVariables = Exact<{
  account: string
}>

export type ConvertQuery = {
  readonly __typename?: 'Query'
  readonly convert?: Amount
}

export type ConvertQueryVariables = Exact<{
  toCurrency: Currency
}>

export type RecentlySearchedAssetsQuery = {
  readonly __typename?: 'Query'
  readonly nftCollections?: NftCollectionConnection
  readonly tokens?: ReadonlyArray<{
    readonly __typename?: 'Token'
    readonly id: string
    readonly decimals?: number
    readonly name?: string
    readonly chain: Chain
    readonly standard?: TokenStandard
    readonly address?: string
    readonly symbol?: string
    readonly market?: {
      readonly __typename?: 'TokenMarket'
      readonly id: string
      readonly price?: Amount
      readonly pricePercentChange?: Amount
      readonly volume24H?: Amount
    }
    readonly project?: {
      readonly __typename?: 'TokenProject'
      readonly id: string
      readonly logoUrl?: string
      readonly safetyLevel?: SafetyLevel
    }
  }>
}

export type RecentlySearchedAssetsQueryVariables = Exact<{
  collectionAddresses: ReadonlyArray<string>
  contracts: ReadonlyArray<ContractInput>
}>

export type NftRouteQuery = {
  readonly __typename?: 'Query'
  readonly nftRoute?: NftRouteResponse
}

export type NftRouteQueryVariables = Exact<{
  chain?: Chain
  senderAddress: string
  nftTrades: ReadonlyArray<NftTradeInput>
  tokenTrades?: ReadonlyArray<TokenTradeInput> | TokenTradeInput
}>

export type CollectionQuery = {
  readonly __typename?: 'Query'
  readonly nftCollections?: NftCollectionConnection
}

export type CollectionQueryVariables = Exact<{
  addresses: ReadonlyArray<string> | string
}>

export type CollectionSearchQuery = {
  readonly __typename?: 'Query'
  readonly nftCollections?: NftCollectionConnection
}

export type CollectionSearchQueryVariables = Exact<{
  query: string
}>

export type DetailsQuery = {
  readonly __typename?: 'Query'
  readonly nftAssets?: NftAssetConnection
}

export type DetailsQueryVariables = Exact<{
  address: string
  tokenId: string
}>

export type NftActivityQuery = {
  readonly __typename?: 'Query'
  readonly nftActivity?: NftActivityConnection
}

export type NftActivityQueryVariables = Exact<{
  filter?: NftActivityFilterInput
  after?: string
  first?: number
}>

export type NftBalanceQuery = {
  readonly __typename?: 'Query'
  readonly nftBalances?: NftBalanceConnection
}

export type NftBalanceQueryVariables = Exact<{
  ownerAddress: string
  filter?: NftBalancesFilterInput
  first?: number
  after?: string
  last?: number
  before?: string
}>

export type NftUniversalRouterAddressQuery = {
  readonly __typename?: 'Query'
  readonly nftRoute?: { readonly __typename?: 'NftRouteResponse'; readonly toAddress: string }
}

export type NftUniversalRouterAddressQueryVariables = Exact<{
  chain?: Chain
}>

export type TrendingCollectionsQuery = {
  readonly __typename?: 'Query'
  readonly topCollections?: {
    readonly __typename?: 'NftCollectionConnection'
    readonly edges: ReadonlyArray<{ readonly node: NftCollection }>
  }
}

export type TrendingCollectionsQueryVariables = Exact<{
  size?: number
  timePeriod?: HistoryDuration
}>

export type AssetQuery = {
  readonly __typename?: 'Query'
  readonly nftAssets?: NftAssetConnection
}

export type AssetQueryVariables = Exact<{
  address: string
  orderBy?: NftAssetSortableField
  asc?: boolean
  filter?: NftAssetsFilterInput
  first?: number
  after?: string
  last?: number
  before?: string
}>

// ===== Document nodes =====

export const TokenDocument = gql`query Token($chain: Chain!, $address: String) { __typename }`
export const TokenPriceDocument = gql`query TokenPrice($chain: Chain!, $address: String, $duration: HistoryDuration!) { __typename }`
export const UniswapPricesDocument = gql`query UniswapPrices($contracts: [ContractInput!]!) { __typename }`
export const SearchTokensDocument = gql`query SearchTokens($searchQuery: String!) { __typename }`
export const TrendingTokensDocument = gql`query TrendingTokens($chain: Chain!) { __typename }`
export const TokenSpotPriceDocument = gql`query TokenSpotPrice($chain: Chain!, $address: String) { __typename }`
export const TopTokens100Document = gql`query TopTokens100($duration: HistoryDuration!, $chain: Chain!) { __typename }`
export const TopTokensSparklineDocument = gql`query TopTokensSparkline($duration: HistoryDuration!, $chain: Chain!) { __typename }`
export const PortfolioBalancesDocument = gql`query PortfolioBalances($ownerAddress: String!, $chains: [Chain!]!) { __typename }`
export const ActivityDocument = gql`query Activity($account: String!) { __typename }`
export const ConvertDocument = gql`query Convert($toCurrency: Currency!) { __typename }`
export const RecentlySearchedAssetsDocument = gql`query RecentlySearchedAssets($collectionAddresses: [String!]!, $contracts: [ContractInput!]!) { __typename }`
export const NftRouteDocument = gql`query NftRoute($chain: Chain, $senderAddress: String!, $nftTrades: [NftTradeInput!]!, $tokenTrades: [TokenTradeInput!]) { __typename }`
export const CollectionDocument = gql`query Collection($addresses: [String!]!) { __typename }`
export const CollectionSearchDocument = gql`query CollectionSearch($query: String!) { __typename }`
export const DetailsDocument = gql`query Details($address: String!, $tokenId: String!) { __typename }`
export const NftActivityDocument = gql`query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) { __typename }`
export const NftBalanceDocument = gql`query NftBalance($ownerAddress: String!, $filter: NftBalancesFilterInput, $first: Int, $after: String, $last: Int, $before: String) { __typename }`
export const NftUniversalRouterAddressDocument = gql`query NftUniversalRouterAddress($chain: Chain) { __typename }`
export const TrendingCollectionsDocument = gql`query TrendingCollections($size: Int, $timePeriod: HistoryDuration) { __typename }`
export const AssetDocument = gql`query Asset($address: String!, $orderBy: NftAssetSortableField, $asc: Boolean, $filter: NftAssetsFilterInput, $first: Int, $after: String, $last: Int, $before: String) { __typename }`

// ===== Hooks =====

export function useTokenQuery(baseOptions: Apollo.QueryHookOptions<TokenQuery, TokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TokenQuery, TokenQueryVariables>(TokenDocument, options)
}

export function useTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenQuery, TokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TokenQuery, TokenQueryVariables>(TokenDocument, options)
}

export function useTokenPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TokenPriceQuery, TokenPriceQueryVariables>(TokenPriceDocument, options)
}

export function useTokenPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TokenPriceQuery, TokenPriceQueryVariables>(TokenPriceDocument, options)
}

export function useUniswapPricesQuery(baseOptions: Apollo.QueryHookOptions<UniswapPricesQuery, UniswapPricesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UniswapPricesQuery, UniswapPricesQueryVariables>(UniswapPricesDocument, options)
}

export function useSearchTokensQuery(baseOptions: Apollo.QueryHookOptions<SearchTokensQuery, SearchTokensQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchTokensQuery, SearchTokensQueryVariables>(SearchTokensDocument, options)
}

export function useTrendingTokensQuery(baseOptions: Apollo.QueryHookOptions<TrendingTokensQuery, TrendingTokensQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TrendingTokensQuery, TrendingTokensQueryVariables>(TrendingTokensDocument, options)
}

export function useTokenSpotPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>(TokenSpotPriceDocument, options)
}

export function useTopTokens100Query(baseOptions: Apollo.QueryHookOptions<TopTokens100Query, TopTokens100QueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TopTokens100Query, TopTokens100QueryVariables>(TopTokens100Document, options)
}

export function useTopTokensSparklineQuery(baseOptions: Apollo.QueryHookOptions<TopTokensSparklineQuery, TopTokensSparklineQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TopTokensSparklineQuery, TopTokensSparklineQueryVariables>(TopTokensSparklineDocument, options)
}

export function usePortfolioBalancesQuery(baseOptions: Apollo.QueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>(PortfolioBalancesDocument, options)
}

export function usePortfolioBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>(PortfolioBalancesDocument, options)
}

export function useActivityQuery(baseOptions: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options)
}

export function useConvertQuery(baseOptions: Apollo.QueryHookOptions<ConvertQuery, ConvertQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ConvertQuery, ConvertQueryVariables>(ConvertDocument, options)
}

export function useRecentlySearchedAssetsQuery(baseOptions: Apollo.QueryHookOptions<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>(RecentlySearchedAssetsDocument, options)
}

export function useNftRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftRouteQuery, NftRouteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NftRouteQuery, NftRouteQueryVariables>(NftRouteDocument, options)
}

export function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options)
}

export function useCollectionSearchQuery(baseOptions: Apollo.QueryHookOptions<CollectionSearchQuery, CollectionSearchQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectionSearchQuery, CollectionSearchQueryVariables>(CollectionSearchDocument, options)
}

export function useDetailsQuery(baseOptions: Apollo.QueryHookOptions<DetailsQuery, DetailsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DetailsQuery, DetailsQueryVariables>(DetailsDocument, options)
}

export function useNftActivityQuery(baseOptions: Apollo.QueryHookOptions<NftActivityQuery, NftActivityQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NftActivityQuery, NftActivityQueryVariables>(NftActivityDocument, options)
}

export function useNftBalanceQuery(baseOptions: Apollo.QueryHookOptions<NftBalanceQuery, NftBalanceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NftBalanceQuery, NftBalanceQueryVariables>(NftBalanceDocument, options)
}

export function useNftUniversalRouterAddressQuery(baseOptions?: Apollo.QueryHookOptions<NftUniversalRouterAddressQuery, NftUniversalRouterAddressQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NftUniversalRouterAddressQuery, NftUniversalRouterAddressQueryVariables>(NftUniversalRouterAddressDocument, options)
}

export function useTrendingCollectionsQuery(baseOptions: Apollo.QueryHookOptions<TrendingCollectionsQuery, TrendingCollectionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TrendingCollectionsQuery, TrendingCollectionsQueryVariables>(TrendingCollectionsDocument, options)
}

export function useAssetQuery(baseOptions: Apollo.QueryHookOptions<AssetQuery, AssetQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AssetQuery, AssetQueryVariables>(AssetDocument, options)
}
