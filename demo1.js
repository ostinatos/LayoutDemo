var config = {
    content: [{
        type: 'row',
        content:[{
            id:'componentA',
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },
            {
                type: 'row',
                content:[
                    {
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            },
            {
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'D' }
            }

                ]
            }
            ]
        }]
    }]
};

var myLayout = new GoldenLayout( config );

myLayout.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

myLayout.init();

//pop out component A
//setTimeout(function(){myLayout.root.getItemsById('componentA')[0].popout();}, 2000);

//add column component to componentA
if(myLayout.isInitialised){
myLayout.root.contentItems[0].addChild({
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'E' }
            });
}

//add component once the layout finish initializing.
myLayout.on('initialised', function(){
    myLayout.root.contentItems[0].addChild({
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'E' }
            });
});


