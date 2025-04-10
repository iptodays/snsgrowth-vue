import cryptoJs from 'crypto-js';

const SECRET_KEY = 'FsZKnk7q2LmrKZNC'

export interface Result {
  code: number;
  data: any;
  message: string | undefined;
  isOk: boolean;
}

export async function request(url: string, data: Record<string, unknown> = {}): Promise<Result> {
  const body = {
    route: url.replace('/', ''),
    ts: Date.now(),
    ...(data !== null && data),
  };
  const headers = {
    'Content-Type': 'text/plain',
  };
  const aesBody = encrypt(JSON.stringify(body));
  console.log(`url: ${url} data: ${JSON.stringify(body)} aesBody: ${aesBody}`);
  const resp = await $fetch('/', {
    baseURL: 'https://api.snsgrowth.net',
    method: 'POST',
    body: aesBody,
    headers: headers,
  })
  const r = JSON.parse(decrypt(resp));
  console.log(`resp: ${JSON.stringify(r)}`);
  return {
    code: r.code,
    data: r.data,
    message: r.message,
    isOk: r.code === 200,
  };
}

/**
 * 使用AES算法对数据进行加密
 * @param data 要加密的数据
 * @param key 加密密钥
 * @returns 加密后的字符串
 */
function encrypt(data: string): string {
  // 将密钥转换为UTF-8编码
  const aesSecret = cryptoJs.enc.Utf8.parse(SECRET_KEY)
  // 使用AES算法对数据进行加密
  return cryptoJs.AES.encrypt(data, aesSecret, {
    iv: aesSecret, // 使用密钥作为初始化向量
    mode: cryptoJs.mode.CBC, // 使用CBC模式
    padding: cryptoJs.pad.Pkcs7 // 使用PKCS7填充方式
  }).toString()
}

/**
 * 使用AES算法对数据进行解密
 * @param data 要解密的数据
 * @param key 解密密钥
 * @returns 解密后的数据
 */
function decrypt(data: string): string {
  // 将密钥转换为UTF-8编码的字节序列
  const aesSecret = cryptoJs.enc.Utf8.parse(SECRET_KEY)
  // 使用AES算法对数据进行解密
  return cryptoJs.AES.decrypt(data, aesSecret, {
    iv: aesSecret, // 使用密钥作为初始向量
    mode: cryptoJs.mode.CBC, // 使用CBC模式进行解密
    padding: cryptoJs.pad.Pkcs7 // 使用PKCS7填充方式
  }).toString(cryptoJs.enc.Utf8) // 将解密后的数据转换为UTF-8编码的字符串
}