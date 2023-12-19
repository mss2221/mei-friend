// default keymap 

export const keymap = {
  // gets mapped to notation only (for all operating systems)
  '#notation': {
    x: 'invertPlacement',
    'shift-x': 'betweenPlacement',
    v: 'addVerticalGroup',
    right: 'nextNote',
    left: 'previousNote',
    up: 'layerUp',
    down: 'layerDown',
    'shift-up': 'shiftPitchChromaticallyUp',
    'shift-down': 'shiftPitchChromaticallyDown',
    'shift-alt-up': 'shiftPitchNameUp',
    'shift-alt-down': 'shiftPitchNameDown',
    'shift-left': 'decreaseDuration',
    'shift-right': 'increaseDuration',
    delete: 'delete',
    backspace: 'delete',
    pagedown: 'nextPage',
    pageup: 'previousPage',
    home: 'firstPage',
    end: 'lastPage',

    n: 'addNote',
    'shift-n': 'convertNoteToRest',
    c: 'convertToChord',
    '.': 'toggleDots',

    'shift-+': 'addDoubleSharp',
    '+': 'addSharp',
    '=': 'addNatural',
    '-': 'addFlat',
    'shift--': 'addDoubleFlat',

    s: 'addSlur',
    t: 'addTie',
    h: 'addCresHairpin',
    'shift-h': 'addDimHairpin',
    f: 'addFermata',
    i: 'addDirective',
    d: 'addDynamics',
    'shift-t': 'addTempo',
    a: 'addArpeggio',
    'ctrl-a': 'addArpeggioDown',
    g: 'addGlissando',
    p: 'addPedalDown',
    'shift-p': 'addPedalUp',
    m: 'addMordent',
    'shift-m': 'addMordentUpper',
    l: 'addTrill',
    r: 'addTurn',
    'shift-r': 'addTurnLower',

    'shift-s': 'toggleStacc',
    'shift-v': 'toggleAccent',
    'shift-e': 'toggleTenuto',
    'shift-a': 'toggleMarcato',
    'shift-i': 'toggleStacciss',
    'shift-y': 'toggleSpicc',

    b: 'addBeam',
    'shift-b': 'addBeamSpan',
    u: 'addSupplied',
    'ctrl-u': 'addSuppliedArtic',
    'ctrl-shift-u': 'addSuppliedAccid',
    o: 'addOctave8Above',
    'ctrl-o': 'addOctave8Below',
    'shift-o': 'addOctave15Above',
    'ctrl-shift-o': 'addOctave15Below',

    'shift-g': 'addGClefChangeBefore',
    'shift-c': 'addCClefChangeBefore',
    'shift-f': 'addFClefChangeBefore',

    escape: 'escapeKeyPressed',

    'shift-alt-f': 'indentSelection',

    space: 'playPauseMidiPlayback',
  },

  // only mapped to notation under MAC OSX
  '.platform-darwin-notation': {
    'cmd-right': 'nextMeasure',
    'cmd-left': 'previousMeasure',
    'ctrl-cmd-right': 'nextPage',
    'ctrl-cmd-left': 'previousPage',
    'cmd-up': 'firstPage',
    'cmd-down': 'lastPage',
  },

  // mapped to body under MAC OSX
  '.platform-darwin-all': {
    'shift-space': 'switchFocus',
    'cmd-shift-up': 'shiftOctaveUp',
    'cmd-shift-down': 'shiftOctaveDown',
    'cmd-shift-g': 'addGClefChangeAfter',
    'cmd-shift-f': 'addFClefChangeAfter',
    'cmd-shift-c': 'addCClefChangeAfter',
    'cmd-alt-up': 'moveElementStaffUp',
    'cmd-alt-down': 'moveElementStaffDown',
    'cmd-m': 'addIds',
    'cmd-shift-m': 'removeIds',
    'cmd-shift-v': 'validate',
    'shift-alt-f': 'indentSelection',
    'cmd-z': 'undo',
    'cmd-shift-z': 'redo',
    'cmd-0': 'notesZoom100',
    'cmd-5': 'notesZoom50',
    'cmd-+': 'notesZoomIn',
    'cmd--': 'notesZoomOut',
    'cmd-o': 'open',
    'cmd-s': 'downloadMei',
    'cmd-shift-b': 'downloadMeiBasic',
    'cmd-shift-s': 'downloadSpeedMei',
    'cmd-l': 'generateUrl',
    'cmd-i': 'ingestFacsimile',
    'ctrl-shift-c': 'correctAccid',
    'shift-r': 'renumberMeasuresTest',
    'cmd-shift-r': 'renumberMeasures',
    'cmd-?': 'openHelp',
    'cmd-ß': 'openHelp',
    'alt-.': 'consultGuidelines',
    'alt-…': 'consultGuidelines',
    'cmd-,': 'toggleSettingsPanel',
    'cmd-a': 'toggleAnnotationPanel',
    'cmd-delete': 'cmdDelete',
    'cmd-p': 'togglePdfMode',
    'cmd-e': 'encloseSelectionWithTag',
    'cmd-/': 'encloseSelectionWithLastTag',

    // add these elements with @place="below"
    'ctrl-s': 'addSlur',
    'ctrl-t': 'addTie',
    'ctrl-h': 'addCresHairpin',
    'ctrl-shift-h': 'addDimHairpin',
    'ctrl-f': 'addFermata',
    'ctrl-i': 'addDirective',
    'ctrl-d': 'addDynamics',
    'ctrl-shift-t': 'addTempo',
    'ctrl-g': 'addGlissando',
    'ctrl-p': 'addPedalDown',
    'ctrl-shift-p': 'addPedalUp',
    'ctrl-m': 'addMordent',
    'ctrl-shift-m': 'addMordentUpper',
    'ctrl-l': 'addTrill',
    'ctrl-r': 'addTurn',
    'ctrl-shift-r': 'addTurnLower',
  },

  // mapped to #notation under Win/Linux
  '.platform-win32-notation, .platform-linux-notation': {
    'ctrl-right': 'nextMeasure',
    'ctrl-left': 'previousMeasure',
    'ctrl-alt-right': 'nextPage',
    'ctrl-alt-left': 'previousPage',
    'ctrl-up': 'firstPage',
    'ctrl-down': 'lastPage',
  },

  // mapped to body under Win/Linux
  '.platform-win32-all, .platform-linux-all': {
    'shift-space': 'switchFocus',
    'ctrl-shift-up': 'shiftOctaveUp',
    'ctrl-shift-down': 'shiftOctaveDown',
    'shift-alt-g': 'addGClefChangeAfter',
    'ctrl-shift-f': 'addFClefChangeAfter',
    'shift-alt-c': 'addCClefChangeAfter',
    'ctrl-alt-up': 'moveElementStaffUp',
    'ctrl-alt-down': 'moveElementStaffDown',
    'ctrl-m': 'addIds',
    'ctrl-shift-m': 'removeIds',
    'ctrl-shift-v': 'validate',
    'shift-alt-f': 'indentSelection',
    'ctrl-z': 'undo',
    'ctrl-shift-z': 'redo',
    'ctrl-0': 'notesZoom100',
    'ctrl-5': 'notesZoom50',
    'ctrl-+': 'notesZoomIn',
    'ctrl--': 'notesZoomOut',
    'ctrl-o': 'open',
    'ctrl-s': 'downloadMei',
    'ctrl-shift-b': 'downloadMeiBasic',
    'ctrl-shift-s': 'downloadSpeedMei',
    'ctrl-l': 'generateUrl',
    'ctrl-i': 'ingestFacsimile',
    'ctrl-shift-c': 'correctAccid',
    'shift-r': 'renumberMeasuresTest',
    'ctrl-shift-r': 'renumberMeasures',
    'ctrl-?': 'openHelp',
    'ctrl-ß': 'openHelp',
    'alt-.': 'consultGuidelines',
    'ctrl-,': 'toggleSettingsPanel',
    'ctrl-a': 'toggleAnnotationPanel',
    'ctrl-delete': 'cmdDelete',
    'ctrl-p': 'togglePdfMode',
    'ctrl-e': 'encloseSelectionWithTag',
    'ctrl-/': 'encloseSelectionWithLastTag',

    // add these elements with @place="below"
    'alt-s': 'addSlur',
    'alt-t': 'addTie',
    'alt-h': 'addCresHairpin',
    'alt-shift-h': 'addDimHairpin',
    'alt-f': 'addFermata',
    'alt-i': 'addDirective',
    'alt-d': 'addDynamics',
    'alt-shift-t': 'addTempo',
    'alt-g': 'addGlissando',
    'alt-p': 'addPedalDown',
    'alt-shift-p': 'addPedalUp',
    'alt-m': 'addMordent',
    'alt-shift-m': 'addMordentUpper',
    'alt-l': 'addTrill',
    'alt-r': 'addTurn',
    'alt-shift-r': 'addTurnLower',
  },
};