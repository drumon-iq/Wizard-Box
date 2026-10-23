ServerEvents.recipes(event => {
// Crafting Table
    // Dragon head
    event.shapeless(Item.of('minecraft:dragon_head', 2),
	[
	   'quark:dragon_scale',
	   'minecraft:dragon_head'
    ]);

    // Chorus fruit
    event.shaped(
	Item.of('minecraft:chorus_fruit', 1),
	[
	    'DDD',
	    'DAD',
	    'DDD'
	],
	{
	    A: 'minecraft:apple',
	    D: 'minecraft:purple_dye'
	}
    );

    // Starting for wizards
    event.shapeless(Item.of('patchouli:guide_book', 1, {'patchouli:book':'patchouli:wizard-box-first'}),
	[
	   'minecraft:book',
	   'minecraft:stone'
    ]);
    
    // Rift Core
    event.shaped(
	Item.of('kubejs:rift_core', 1),
	[
	    'PSP',
	    'STS',
	    'PSP'
	],
	{
	    P: 'embers:dawnstone_plate',
	    S: 'malum:eldritch_spirit',
	    T: 'kubejs:teleportation_aberration'
	}
    );

    // Teleportation Aberration
    event.shapeless(Item.of('kubejs:teleportation_aberration', 1), [
	   'botania:ender_dagger',
	   'minecraft:ender_pearl'
    ]).damageIngredient('botania:ender_dagger');

    // Gold Dimensional Door
    event.replaceInput(
	{id:'dimdoors:gold_dimensional_door'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );

    // Quartz Dimensional Door
    event.replaceInput(
	{id:'dimdoors:quartz_dimensional_door'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );

    // Iron Dimensional Door
    event.replaceInput(
	{id:'dimdoors:iron_dimensional_door'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );
    
    // Oak Dimensional Door
    event.replaceInput(
	{id:'dimdoors:oak_dimensional_door'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );

    // Rift remover
    event.replaceInput(
	{id:'dimdoors:rift_remover'},
	'minecraft:ender_pearl',
	'botania:ender_dagger'
    );

    // Rift signature
    event.replaceInput(
	{id:'dimdoors:rift_signature'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );

    // Stabilized Rift signature
    event.replaceInput(
	{id:'dimdoors:stabilized_rift_signature'},
	'minecraft:ender_pearl',
	'botania:quartz_dark'
    );

    // Rift stabilizer
    event.replaceInput(
	{id:'dimdoors:rift_stabilizer'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );

    // Rift stabilizer
    event.replaceInput(
	{id:'gateways:basic/blaze'},
	'minecraft:ender_pearl',
	'kubejs:rift_core'
    );


    // Nature's compass
    event.remove({id: 'naturescompass:natures_compass'});
    event.shaped(
	Item.of('naturescompass:naturescompass', 1),
	[
	    'FIF',
	    'IUI',
	    'FIF'
	],
	{
	    U: 'undergarden:utherium_crystal',
	    I: 'undergarden:froststeel_ingot',
	    F: '#minecraft:flowers'
	}
    );

    // Explorer's compass
    event.remove({id: 'explorerscompass:explorers_compass'});
    event.shaped(
	Item.of('explorerscompass:explorerscompass', 1),
	[
	    'RIR',
	    'IUI',
	    'RIR'
	],
	{
	    U: 'undergarden:utherium_crystal',
	    I: 'undergarden:cloggrum_ingot',
	    R: 'minecraft:rotten_flesh'
	}
    );

// Evil Craft
    // End stone
    event.custom({
	type: "evilcraft:blood_infuser",
	item: "minecraft:deepslate",
	fluid: {
	    fluid: "evilcraft:blood",
	    amount: 3000
	},
	result: {
	    item: "minecraft:end_stone"
	},
	duration: 1500,
	xp: 0.7,
	tier: 3
    });
})
