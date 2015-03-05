module.exports = function (unitTest)
{

// JSModeler includes start
unitTest.AddSourceFile ('../../src/core/jsm.js');
unitTest.AddSourceFile ('../../src/core/timer.js');
unitTest.AddSourceFile ('../../src/core/algorithm.js');
unitTest.AddSourceFile ('../../src/core/async.js');
unitTest.AddSourceFile ('../../src/core/check.js');
unitTest.AddSourceFile ('../../src/geometry/coord.js');
unitTest.AddSourceFile ('../../src/geometry/determinant.js');
unitTest.AddSourceFile ('../../src/geometry/coordutils.js');
unitTest.AddSourceFile ('../../src/geometry/matrix.js');
unitTest.AddSourceFile ('../../src/geometry/coordsystem.js');
unitTest.AddSourceFile ('../../src/geometry/coordsystemutils.js');
unitTest.AddSourceFile ('../../src/geometry/sector.js');
unitTest.AddSourceFile ('../../src/geometry/sectorutils.js');
unitTest.AddSourceFile ('../../src/geometry/line.js');
unitTest.AddSourceFile ('../../src/geometry/lineutils.js');
unitTest.AddSourceFile ('../../src/geometry/box.js');
unitTest.AddSourceFile ('../../src/geometry/boxutils.js');
unitTest.AddSourceFile ('../../src/geometry/transformation.js');
unitTest.AddSourceFile ('../../src/geometry/transformationutils.js');
unitTest.AddSourceFile ('../../src/geometry/plane.js');
unitTest.AddSourceFile ('../../src/geometry/planeutils.js');
unitTest.AddSourceFile ('../../src/geometry/projection.js');
unitTest.AddSourceFile ('../../src/geometry/convexhull.js');
unitTest.AddSourceFile ('../../src/geometry/polygon.js');
unitTest.AddSourceFile ('../../src/geometry/polygonutils.js');
unitTest.AddSourceFile ('../../src/geometry/octree.js');
unitTest.AddSourceFile ('../../src/geometry/bsptree.js');
unitTest.AddSourceFile ('../../src/geometry/utilities.js');
unitTest.AddSourceFile ('../../src/modeler/body.js');
unitTest.AddSourceFile ('../../src/modeler/model.js');
unitTest.AddSourceFile ('../../src/modeler/color.js');
unitTest.AddSourceFile ('../../src/modeler/light.js');
unitTest.AddSourceFile ('../../src/modeler/material.js');
unitTest.AddSourceFile ('../../src/modeler/adjacencylist.js');
unitTest.AddSourceFile ('../../src/modeler/bodyutils.js');
unitTest.AddSourceFile ('../../src/modeler/textureutils.js');
unitTest.AddSourceFile ('../../src/modeler/cututils.js');
unitTest.AddSourceFile ('../../src/modeler/generator.js');
unitTest.AddSourceFile ('../../src/modeler/camera.js');
unitTest.AddSourceFile ('../../src/modeler/explode.js');
unitTest.AddSourceFile ('../../src/modeler/exporter.js');
unitTest.AddSourceFile ('../../src/modeler/trianglebody.js');
unitTest.AddSourceFile ('../../src/modeler/trianglemodel.js');
unitTest.AddSourceFile ('../../src/import/binaryreader.js');
unitTest.AddSourceFile ('../../src/import/importer.js');
unitTest.AddSourceFile ('../../src/import/importer3ds.js');
unitTest.AddSourceFile ('../../src/import/importerobj.js');
unitTest.AddSourceFile ('../../src/import/importerstl.js');
unitTest.AddSourceFile ('../../src/import/importercommon.js');
unitTest.AddSourceFile ('../../src/extras/solidgenerator.js');
unitTest.AddSourceFile ('../../src/extras/extgenerator.js');
unitTest.AddSourceFile ('../../src/extras/painter.js');
unitTest.AddSourceFile ('../../src/extras/drawing.js');
unitTest.AddSourceFile ('../../src/extras/subdivision.js');
unitTest.AddSourceFile ('../../src/extras/svgtomodel.js');
unitTest.AddSourceFile ('../../src/extras/csg.js');
unitTest.AddSourceFile ('../../src/extras/curves.js');
unitTest.AddSourceFile ('../../src/renderer/renderer.js');
unitTest.AddSourceFile ('../../src/renderer/pointcloudrenderer.js');
unitTest.AddSourceFile ('../../src/renderer/converter.js');
unitTest.AddSourceFile ('../../src/viewer/jsonfileloader.js');
unitTest.AddSourceFile ('../../src/viewer/mouse.js');
unitTest.AddSourceFile ('../../src/viewer/touch.js');
unitTest.AddSourceFile ('../../src/viewer/navigation.js');
unitTest.AddSourceFile ('../../src/viewer/softwareviewer.js');
unitTest.AddSourceFile ('../../src/viewer/spriteviewer.js');
unitTest.AddSourceFile ('../../src/viewer/viewer.js');
unitTest.AddSourceFile ('../../src/viewer/pointcloudviewer.js');
unitTest.AddSourceFile ('../../src/three/threeconverter.js');
unitTest.AddSourceFile ('../../src/three/threeviewer.js');
// JSModeler includes end

unitTest.AddTestFile ('tests/core.js');
unitTest.AddTestFile ('tests/geometry.js');
unitTest.AddTestFile ('tests/modeler.js');
unitTest.AddTestFile ('tests/import.js');
unitTest.AddTestFile ('tests/extras.js');
unitTest.AddTestFile ('tests/visual.js');

};
