$(function(){ // on dom ready

$('#layers').cytoscape({
  layout: {
    name: 'dagre',
    padding: 10
  },

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': '100',
        'height': '50',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff',
        'text-wrap': 'wrap',
        'font-size': '17px'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),


  elements: {
    nodes: [
      { data: { id: '0', name: 'Input\n(MultiLayerNetwork)', weight: 100, faveColor: '#008000', faveShape: 'vee' } },
      { data: { id: '1', name: 'Dense\n(MultiLayerNetwork)', weight: 100, faveColor: '#EC7063', faveShape: 'rectangle' } },
      { data: { id: '2', name: 'Convolution\n(MultiLayerNetwork)', weight: 100, faveColor: '#641E16', faveShape: 'rectangle' } },
      { data: { id: '3', name: 'Layer\n(MultiLayerNetwork)', weight: 100, faveColor: '#A569BD', faveShape: 'rectangle' } },
      { data: { id: '4', name: 'Layer', weight: 100, faveColor: '#512E5F', faveShape: 'rectangle' } },
      { data: { id: '5', name: 'Layer', weight: 100, faveColor: '#5DADE2', faveShape: 'rectangle' } },
      { data: { id: '6', name: 'Layer', weight: 100, faveColor: '#154360', faveShape: 'rectangle'} },
      { data: { id: '7', name: 'Layer', weight: 100, faveColor: '#45B39D', faveShape: 'rectangle'} },
      { data: { id: '8', name: 'Layer', weight: 100, faveColor: '#0E6251', faveShape: 'triangle'} },
      { data: { id: '9', name: 'Layer', weight: 100, faveColor: '#45B39D', faveShape: 'rectangle'} },
      { data: { id: '10', name: 'Layer', weight: 100, faveColor: '#0E6251', faveShape: 'rectangle'} },
      { data: { id: '11', name: 'Layer', weight: 100, faveColor: '#58D68D', faveShape: 'rectangle'} },
      { data: { id: '12', name: 'Layer', weight: 100, faveColor: '#145A32', faveShape: 'rectangle'} },
      { data: { id: '13', name: 'Layer', weight: 100, faveColor: '#F5B041', faveShape: 'rectangle'} },
      { data: { id: '14', name: 'Layer\n(MultiLayerNetwork)', weight: 100, faveColor: '#7D6608', faveShape: 'triangle'} },
      { data: { id: '15', name: 'Layer', weight: 100, faveColor: '#DC7633', faveShape: 'rectangle'} },
      { data: { id: '16', name: 'Layer', weight: 100, faveColor: '#784212', faveShape: 'rectangle'} },
      { data: { id: '17', name: 'Layer', weight: 100, faveColor: '#566573', faveShape: 'octagon'} },
      { data: { id: '18', name: 'Output', weight: 100, faveColor: '#1B2631', faveShape: 'ellipse'} }
    ],
    edges: [
      { data: { source: '0', target: '1', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '1', target: '2', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '2', target: '3', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '3', target: '4', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '4', target: '5', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '5', target: '6', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '6', target: '7', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '7', target: '8', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '8', target: '9', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '9', target: '10', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '10', target: '11', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '11', target: '12', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '12', target: '13', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '13', target: '14', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '14', target: '15', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '15', target: '16', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '16', target: '17', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '17', target: '18', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '18', target: '19', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '19', target: '20', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '20', target: '21', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '21', target: '22', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '22', target: '23', faveColor: '#A9A9A9', strength: 100 } },
      { data: { source: '23', target: '24', faveColor: '#A9A9A9', strength: 100 } }
    ]
  },

  ready: function(){
    window.cy = this;
    cy.panningEnabled(true);
    cy.autoungrabify(true);
    cy.zoom(1);
    cy.zoomingEnabled(false);
    cy.panBy({x: -50, y:0});

  }
});

}); // on dom ready
