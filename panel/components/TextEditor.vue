<template>
  <ckeditor
    :editor="editor"
    :value="value"
    :config="config"
    @input="event => $emit('input', event)"
  />
</template>
<script>
/*eslint-disable*/
  let FullFreeBuildEditor;
  let CKEditor;
  if (process.client) {
    FullFreeBuildEditor = require('ckeditor5-custom-build/build/ckeditor');
    CKEditor = require('@ckeditor/ckeditor5-vue2')
  }else {
    CKEditor = { component : {template:'<div></div>'}}
  }

  export default {
    name: 'TextEditor',
    components: {
      ckeditor: CKEditor.component
    },
    props: {
      value: {
        type: String,
        required: false
      },
      config: {
       type: Object,
       required: false,
       default: function () {}
     }
    },
    data() {
      return {
        editor: FullFreeBuildEditor,
      }
    },
  };
</script>
