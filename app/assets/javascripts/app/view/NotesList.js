Ext.define('Notes.view.NotesList', {
    extend: 'Ext.Container',
    requires: [ 'Ext.TitleBar', 'Ext.dataview.List' ],
    alias: 'widget.noteslistview',
    config: {
	layout: {
	    type: 'fit'
	},
	items: [{
	    xtype: 'titlebar',
	    title: 'My Notes',
	    docked: 'top',
	    items: [
		{
		    xtype: 'button',
		    text: 'New',
		    ui: 'action',
		    itemId: 'newButton',
		    align: 'right'
	    }]
	},{
	    xtype: 'list',
	    store: 'Notes',
	    itemId: 'notesList',
	    itemCls: 'list-item-custom',
	    loadingText: 'Loading Notes...',
	    emptyText: '<div>No notes found.</div>',
	    onItemDisclosure: true,
	    itemTpl: '<div>{title}</div><div>{narrative}</div>'
	}]
    }
});

