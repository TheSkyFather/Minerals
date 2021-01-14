const block = extendContent(CoreBlock,"megacore", {
icons(){
  return [
  Core.atlas.find(this.name),
  Core.atlas.find(this.name+"-team")
  ];
 }
});