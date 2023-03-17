const _ = require('lodash');
const util = require('util')

const array = [
  {
    "data": {
      "key": "222222",
      "value": "Projects-value",
      "isEdit": false
    },
    "children": [
      {
        "data": {
          "key": "projects-sub",
          "value": "Projects-sub-value",
          "isEdit": false
        },
        "children": []
      },
      {
        "data": {
          "key": "projects-sub2",
          "value": "Projects-sub2-value",
          "isEdit": false
        },
        "children": []
      }
    ]
  },
  {
    "data": {
      "key": "projects2",
      "value": "projects2-value",
      "isEdit": false
    },
    "children": [
      {
        "data": {
          "key": "child1",
          "value": "child1-value",
          "isEdit": false
        },
        "children": [
          {
            "data": {
              "key": "child2",
              "value": "child2",
              "isEdit": false
            },
            "children": [],
            "expended": true
          }
        ],
        "expended": true,
        "expanded": true
      }
    ],
    "expanded": true
  }
]

function arrayToJsonConvert(nodes) {
  const obj = {};
  function walk(target, obj) {
    let items = target, i;
    const key = target.data.key;
    const value = target.data.value;
    obj[key] = value;
    if (items) {
      i = items.children?.length ?? 0;
      if( i > 0) obj[key] = {}
      while (i--) {
        walk(items.children[i], obj[key])
      }
    }
    return items
  }
  for(let i=0; i<nodes.length; i++) {
    walk(nodes[i], obj);
  }

  return obj;
}

function jsonToArrayConvert(json) {
  const array = [];
  function walk(target, array) {
    let items = target, i;
    const keys = Object.keys(target);
    if (items) {
      i = keys.length ?? 0;
      while (i--) {
        const key = keys[i];
        const value = items[key];
        if(_.isObject(value)) {
          const obj = {
            data: {
              key: key,
              value: "",
              isEdit: false
            },
            children: []
          }
          array.push(obj)
          walk(value, array[array.length - 1].children)
        } else {
          const obj = {
            data: {
              key: key,
              value: value,
              isEdit: false
            },
            children: []
          }
          array.push(obj);
        }
      }
    }
    return items
  }
  const keys = Object.keys(json);
  for(let i=0; i<keys.length; i++) {
    const obj = {
      data: {
        key: keys[i],
        value: "",
        isEdit: false
      },
      children: []
    }
    array.push(obj);
    walk(json[keys[i]], array[i].children);
  }
  return array;
}

const convertJson = arrayToJsonConvert(array);
const convertArray = jsonToArrayConvert(convertJson);
// console.log(convertJson)
console.log(util.inspect(convertArray, {showHidden: false, depth: null, colors: true}))
