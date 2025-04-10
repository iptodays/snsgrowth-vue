export interface ConfigData {
  platforms: Platform[]; // 平台的数组
}

// 定义服务项的接口
export interface ServiceItem {
  title: string; // 服务项的标题，例如 "500 TikTok Followers"
  count: number; // 服务项的数量，例如 500
  price: number; // 服务项的价格，例如 3.99
  action?: string; // 服务项的操作，例如 "tiktok_follow"，可选属性
  isRecommend?: boolean; // 是否为推荐服务项，可选属性
  sku: string; // 服务项的唯一标识码，例如 "tiktok-followers-500"
}

// 定义服务列表的接口
export interface ServiceList {
  name: string; // 服务的名称，例如 "Followers"
  services: ServiceItem[]; // 服务项的数组
}

// 定义平台的接口
export interface Platform {
  name: string; // 平台的名称，例如 "TikTok"
  services: ServiceList[]; // 平台提供的服务列表的数组
}