let o = {
		//origin:源对象  oldkey:查询原键名所用的键名 newkey:所需用作新键名的键值的键名  返回一个Map对象（最好用非引用类型的键值用作键名，否则只能用原引用对象查询）
		transform: function(origin,oldkey,newkey){
			
			let target = new Map();
			for(let e in origin){
			   target.set(origin[e][newkey],(origin[e][oldkey]=e) && origin[e]);	
			}
			return target;
		}
}