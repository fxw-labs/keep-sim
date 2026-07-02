# ADR 0001: 默认 100KB 单档位 + 静态 Payload

## Status
Accepted

## Context
原项目 `dennischancs/gg-keeper` 使用 120KB payload 作为 Giffgaff 保号的经验值。用户希望复刻并优化该项目，目标是减少每次保号消耗的流量，同时保持足够的成功率。

## Decision
- 默认档位固定为 **100KB**
- 只保留一个静态 `payload.txt` 文件，大小为 100KB
- 不提供多档位切换（如 10KB / 60KB / 120KB）
- PWA 仅提供添加到主屏、离线加载界面、Service Worker 缓存静态资源的能力
- 不提供推送提醒、后台同步或自动执行

## Consequences

### Pros
- 界面极简，只有一个核心操作按钮
- 部署简单，纯静态文件即可托管到 GitHub Pages / Cloudflare Pages
- 100KB 比原版 120KB 减少约 17% 流量消耗
- 保留原项目的防缓存策略，确保每次请求都真实走网络

### Cons
- 用户无法调整档位；如果 100KB 在个别场景下不触发计费，没有备用方案
- 无法自动提醒用户保号
- 无法自动执行保号

## Notes
- 100KB 是默认值，未来若用户反馈需要更小或更大档位，可通过新增 ADR 扩展
- PWA 的“离线能力”仅指应用界面可离线加载，真正的保号操作必须联网
