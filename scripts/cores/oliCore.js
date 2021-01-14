const block = extendContent(CoreBlock,"oliCore", {
icons(){
  return [
  Core.atlas.find(this.name),
  Core.atlas.find(this.name+"-team-sharded")
  ];
 }
});