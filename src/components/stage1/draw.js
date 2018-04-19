module.exports = function draw(){
	const tarot = require('./tarot.json')

	suit_dic = {'major':'ar','wands':'wa','cups':'cu','swords':'sw','coins':'pe'}
	rank_dic = {'page':'pa','knight':'kn','queen':'qu','king':'ki'}
	dual_dic = {0:['正位','light'],1:['逆位','shadow']}
	let index = Math.floor(Math.random()*78)
	chineseName = tarot['tarot'][index]['name2']
	englishName = tarot['tarot'][index]['name']
	dual = Math.round(Math.random())?0:1

	flag = dual_dic[dual][0]
	text = `${flag} ${chineseName}`
	s = tarot['tarot'][index]['suit']
	r = tarot['tarot'][index]['rank']
	suit = suit_dic[s]
	//console.log(text) // 正位 女祭司 (The High Priestess)
	if (typeof r!=='number'){
		rank = rank_dic[r];
	}else{
		rank = r;
	}

	//console.log(rank);//該系列第幾張
	tarotName = `${suit}${rank}.jpg`
	//console.log(tarotName); //檔名

	mean = tarot['tarot'][index]['meanings'][dual_dic[dual][1]]
	randomChoice = Math.floor(Math.random()*mean.length)

	//console.log(mean[randomChoice]) // Mean
	return {
		reversed:dual,
		card:text,
		fileName:tarotName,
		mean:mean[randomChoice]
	}
}