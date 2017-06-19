turns = [
	{
		firstNight: false,
		title: "Go to sleep",
		shortTitle: "Sleep",
		desc: "The village goes to sleep",
		actions: [],
		flavor: [
			"... and the town falls asleep.",
			"Go the fuck to sleep",
			"Ok guys, lets stop talking about _____ and go to sleep",
			"Zzzzzzz",
			"Zzzzzzzzzz",
			"How can this town can sleep at all is a wonder",
			"You snore like a werewolf",
			"Please, go to sleep.",
			"Heads down, thumbs up, time to play: you got murdered in the night",
			"The town of little insomnites goes back to their slumber",
			"Sleep now, we'll murder someone else tomorrow morning",
			"I'm too tired to lynch someone else. Lets go to bed",
			"Sleeeeeeeeeeeeeeeep",
			"Go to sleep, pl- ALL GLORY TO HYPNOTOAD!"
		]
	},
	{
		firstNight: true,
		title: "The Thief wakes up",
		shortTitle: "Theif",
		desc: "Select your new identity!",
		actions: ['theif'],
		role: 'thief',
		flavor: [
			'How do you steal a new role?',
			'Identity theft is a felony. Just sayin\'',
			'Hmmmm, should I be a werewolf ... or a werewolf?',
			'Can I just remain a theif? Seriously, these choices suck.',
			'Select your new iden- ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: true,
		title: "The Cupid wakes up",
		shortTitle: "Cupid",
		desc: "Select 2 players to fall in love.",
		actions: ['cupid'],
		role: 'cupid',
		flavor: [
			'Now kiss....',
			'Heheh, what\'s the best gay couple in the room?',
			'Bow chicka wow wow',
			'Never gonna give you up',
			'Never gonna let you down',
			'Never gonna run around and desert you',
			'Never gonna make you cry',
			'Never gonna say goodbye',
			'Never gonna tell a lie and hurt you',
			'They look so cu- ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: true,
		title: "The lovers wake up",
		dsec: 'You are bound by love. Should one of you die, the other kills themselves. They simply cannot live without the other.',
		actions: [],
		shortTitle: "Lovers",
		flavor: [
			'What on earth are they doing up at this time of night?',
			'Daw, how cute',
			'So, uh. Wanna kill ourselves if the other dies?',
			'OMG. I\'m Romeo and you\'re Juliet. It\'s SO romantic!',
			'Bow chicka wow wow',
			'Never gonna give you up',
			'Never gonna let you down',
			'Never gonna run around and desert you',
			'Never gonna make you cry',
			'Never gonna say goodbye',
			'Never gonna tell a lie and hurt you',
			'I love y- ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: false,
		title: "The Defender wakes up",
		shortTitle: "Defender",
		role: 'defender',
		actions: ['defender'],
		desc: "Select one player to defend from the werewolves. Cannot pick the same player twice, but you can defend yourself.",
		flavor: [
			'So, couldn\'t we solve this werewolf problem if we had a dozen more defenders?',
			'Who defends the defender? It\'s like some weird mailman conundrum!',
			'♪ Defender - Drained - Spent - Determined - Intent ♫',
			'Please defend me. Please defend me. Please defend me. - Fortune Teller',
			'You, me, that guy, me, other person, me, that one chick, me',
			'I\'ll protect yo- ALL GLORY TO HYPNOTOAD'
		]
	},
	{
		firstNight: false,
		title: "The Furtune Teller wakes up",
		shortTitle: "Furtune Teller",
		role: 'fortuneteller',
		desc: "Select one player who\'s role you want to see.",
		actions: ['fortuneteller'],
		flavor: [
			'This couch is save. I just feel good about it.',
			'You REALY don\'t want to lynch me',
			'I\'ll just take a peak and - WHOA!',
			'Oh look a werewolf, now I\'ll die tonight',
			'He looks shifty I\'ll jus- ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: false,
		title: "The Werewolves",
		shortTitle: "Werewolves",
		role: 'werewolf',
		desc: "Select one player to attack in the night. Watch out for the little girl.",
		actions: ['werewolf'],
		flavor: [
			'nom nom nom ... babies',
			'I do not kill people. That is my LEAST favorite thing to do.',
			'My stomach was making the rumblies, that only hands would satisfy',
			'Arroooooooooo',
			'Aroooooooo - ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: false,
		title: "The Witch wakes up",
		shortTitle: "Witch",
		role: 'witch',
		actions: ['witchDisplay', 'witchPotion', 'witchPoison'],
		desc: "After seeing who was slain in the night. The witch can use one of her two potions: ",
		flavor: [
			'But how do you KNOW she\'s a witch?',
			'Lets try not to goof up this time.',
			'You had the power all along, my dear',
			'Your a witch, Hermione!',
			'I love brewing a good po- ALL GLORY TO HYPNOTOAD'
		]
	},
	{
		firstNight: false,
		title: "The Piper wakes up",
		shortTitle: "Piper",
		role: 'piper',
		actions: ['piper'],
		desc: "Select 2 players to charm. Charm the whole village and to win",
		flavor: [
			'How charming',
			'I\'m just laying out some pipe',
			'Let me play my so- ALL GLORY TO HYPNOTOAD!'
		]
	},
	{
		firstNight: false,
		title: "The Charmed players wake up",
		shortTitle: "Charmed Players",
		role: 'piper',
		actions: [],
		desc: "You have all been charmed. But by who?",
		flavor: [
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO THE PIPER!',
			'ALL GLORY TO HYPNOTOAD!'
		]
	}
];
roles = {
	'': {
		name: 'Not Playing',
		desc: 'This player is not playing',
		team: 'null',
		plural: true
	},
	'blank': {
		name: '',
		desc: '',
		team: 'null',
		plural: false
	},
	'villager': {
		name: 'Villager',
		desc: 'Just a normal villager.',
		team: 'villagers',
		plural: true
	},
	'werewolf': {
		name: 'Werewolf',
		desc: 'nomnomnom villagers.',
		team: 'werewolves',
		plural: true
	},
	'thief': {
		name: 'Theif',
		desc: 'Steals an identity in the first night',
		team: 'villagers',
		plural: false
	},
	'cupid': {
		name: 'Cupid',
		desc: 'Assigns to players as lovers in the first night',
		team: 'villagers',
		plural: false
	},
	'witch': {
		name: 'Witch',
		desc: 'Can use either the potion or poison after werewolves round',
		team: 'villagers',
		plural: false
	},
	'piper': {
		name: 'Piper',
		desc: 'Charms 2 players each night. Wins if all players are charmed',
		team: 'villagers',
		plural: false
	},
	'hunter': {
		name: 'Hunter',
		desc: 'Immediately kills one other player after killed',
		team: 'villagers',
		plural: false
	},
	'littlegirl': {
		name: 'Little Girl',
		desc: 'Can spy on werewolves during their round at night',
		team: 'villagers',
		plural: false
	},
	'fortuneteller': {
		name: 'Fortune Teller',
		desc: 'Can see the identity of one player each night',
		team: 'villagers',
		plural: false
	},
	'defender': {
		name: 'Defender',
		desc: 'Protects on villager each nigh. Cannot be the same each night',
		team: 'villagers',
		plural: false
	},
	'idiot': {
		name: 'Village Idiot',
		desc: 'If selected for lynching, is not killed but cannot vote again. Does not select Sheriff',
		team: 'villagers',
		plural: false
	},
	'scapegoat': {
		name: 'Scapegoat',
		desc: 'If lynching results in tie, is killed',
		team: 'villagers',
		plural: false
	},
	'elder': {
		name: 'Elder',
		desc: 'Does not die on first werewolf attempt. Bad shit happens if lynched',
		team: 'villagers',
		plural: false
	}
};

actions = {
	"theif": {
		title: 'Select new Identity',
		type: 'theif',
		select: 1
	},
	"cupid": {
		title: 'Select Lovers',
		type: 'player',
		select: 2
	},
	"defender": {
		title: 'Select player to defend.',
		type: 'player',
		select: 1
	},
	"fortuneteller": {
		title: 'Select player to identify',
		type: 'player',
		select: 1,
	},
	"fortunetellerDisplay": {
		title: 'Reveal A Player',
		type: 'display',
		displayType: 'revealed',
		showRole: true
	},
	"werewolf": {
		title: 'Select Victim',
		type: 'player',
		select: 1,
		team: 'werewolf'
	},
	"witchDisplay": {
		title: 'Display Werewolf Victim',
		type: 'display',
		displayType: 'killed',
		showRole: false
	},
	"witchPotion": {
		title: 'Potion - Revive a Victim.',
		type: 'player',
		select: 1
	},
	"witchPoison": {
		title: 'Poison - Kill a Player.',
		type: 'player',
		select: 1
	},
	"piper": {
		title: 'Select Players to Charm',
		type: 'player',
		select: 2,
		team: 'piper'
	}
}