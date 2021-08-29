const megaCore = extendContent(CoreBlock,"megacore", {
    icons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name+"-team")
        ];
    }
});

const oliCore = extendContent(CoreBlock,"oliCore", {
    icons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name+"-team-sharded")
        ];
    }
});
