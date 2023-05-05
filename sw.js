let version= "version 5";

self.addEventListener("install",e=>{
    console.log("SW instalada");
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{
            console.log("Informacion cacheada");
        }).catch(e=>{
            console.log(e);
        })
    })
})

self.addEventListener("activate",()=>{
    console.log("SW activado");
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){
                    console.log("cache antiguo Eliminado");
                    return caches.delete(cache);
                }
            })
        )
    })
})


self.addEventListener("fetch",e=>{
    e.respondWith(async ()=>{
        const respuestaDeCache= await caches.match(e.request);
        if(respuestaDeCache)return respuestaDeCache;
        return e.request;
    })
})
        