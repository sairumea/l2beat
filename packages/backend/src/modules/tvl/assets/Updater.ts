import { ChainId, Hash256, UnixTime } from '@l2beat/shared-pure'

import { UpdaterStatus } from '../../status/api/view/TvlStatusPage'
import { ReportRecord } from '../repositories/ReportRepository'

export interface ReportUpdater {
  getChainId: () => ChainId
  getConfigHash: () => Hash256
  getMinTimestamp: () => UnixTime
  getStatus: () => UpdaterStatus
  getReportsWhenReady(
    timestamp: UnixTime,
    refreshIntervalMs?: number,
  ): Promise<ReportRecord[]>
}

export interface DataUpdater {
  getStatus: () => UpdaterStatus
}
