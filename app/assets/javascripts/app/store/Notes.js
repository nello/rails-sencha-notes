Ext.define('Notes.store.Notes', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Notes.model.Note',
	data: [
	    { title: 'Note 1', narrative: 'narrative 1' },
	    { title: 'Note 2', narrative: 'narrative 2' }
 	],
	autoLoad: true,
	sorters: [
	    { property: 'dateCreated', direction: 'DESC'}
	]
    }
});

