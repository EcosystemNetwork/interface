/* eslint-disable */
// @generated
// This file is a stub generated to satisfy TypeScript compilation.
// It provides type stubs matching what graphql-codegen would produce from thegraph schema.

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
  BigDecimal: string
  BigInt: string
  Bytes: string
}

export type Block_height = {
  hash?: string
  number?: number
  number_gte?: number
}

export type Token = {
  __typename?: 'Token'
  id: string
  symbol: string
  name: string
  decimals: string
  derivedETH: string
}

export type Pool = {
  __typename?: 'Pool'
  id: string
  feeTier: any
  liquidity: any
  sqrtPrice: any
  tick: any
  token0: Token
  token1: Token
  token0Price: any
  token1Price: any
  volumeUSD: string
  volumeToken0: string
  volumeToken1: string
  txCount: string
  totalValueLockedToken0: string
  totalValueLockedToken1: string
  totalValueLockedUSD: string
}

export type Bundle = {
  __typename?: 'Bundle'
  id: string
  ethPriceUSD: string
}

export type Tick = {
  __typename?: 'Tick'
  tick: any
  liquidityNet: any
  price0?: any
  price1?: any
}

export type _Meta_ = {
  __typename?: '_Meta_'
  block: _Block_
}

export type _Block_ = {
  __typename?: '_Block_'
  number: number
}

// ===== Query types =====

export type AllV3TicksQuery = {
  __typename?: 'Query'
  ticks: Array<{
    __typename?: 'Tick'
    tick: any
    liquidityNet: any
    price0?: any
    price1?: any
  }>
}

export type AllV3TicksQueryVariables = Exact<{
  poolAddress?: string
  skip: number
}>

export type FeeTierDistributionQuery = {
  __typename?: 'Query'
  _meta?: _Meta_
  asToken0: Array<{
    __typename?: 'Pool'
    feeTier: any
    totalValueLockedToken0: string
    totalValueLockedToken1: string
  }>
  asToken1: Array<{
    __typename?: 'Pool'
    feeTier: any
    totalValueLockedToken0: string
    totalValueLockedToken1: string
  }>
}

export type FeeTierDistributionQueryVariables = Exact<{
  token0: string
  token1: string
}>

export type PoolDataQuery = {
  __typename?: 'Query'
  pools: Array<Pool>
  bundles?: Array<Bundle>
}

export type PoolDataQueryVariables = Exact<{
  poolId: Array<string>
  block?: Block_height
}>

// ===== Document nodes =====

export const AllV3TicksDocument = gql`query AllV3Ticks($poolAddress: String, $skip: Int!) { __typename }`
export const FeeTierDistributionDocument = gql`query FeeTierDistribution($token0: String!, $token1: String!) { __typename }`
export const PoolDataDocument = gql`query PoolData($poolId: [ID!], $block: Block_height) { __typename }`

// ===== Hooks =====

export function useAllV3TicksQuery(baseOptions: Apollo.QueryHookOptions<AllV3TicksQuery, AllV3TicksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllV3TicksQuery, AllV3TicksQueryVariables>(AllV3TicksDocument, options)
}

export function useAllV3TicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllV3TicksQuery, AllV3TicksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllV3TicksQuery, AllV3TicksQueryVariables>(AllV3TicksDocument, options)
}

export function useFeeTierDistributionQuery(baseOptions: Apollo.QueryHookOptions<FeeTierDistributionQuery, FeeTierDistributionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeeTierDistributionQuery, FeeTierDistributionQueryVariables>(FeeTierDistributionDocument, options)
}

export function usePoolDataQuery(baseOptions: Apollo.QueryHookOptions<PoolDataQuery, PoolDataQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PoolDataQuery, PoolDataQueryVariables>(PoolDataDocument, options)
}
