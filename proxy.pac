function FindProxyForURL(url, host) {
    if (host == 'junziyun3.skeo.net' || host == 'junziyun.iecat.cn' || host == 'junziyun1.iecat.cn' || host == 'junziyun2.iecat.cn') {
        return 'PROXY 114.224.28.154:9999;'
    }
    return 'DIRECT;'
}