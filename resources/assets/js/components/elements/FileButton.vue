<template>
  <div class="btn btn-primary jbtn-file"> {{ title }}
    <input id="avatar-file"
           name="img"
           type="file"
           enctype="multipart/form-data"
           @change="OnChange">
  </div>
</template>

<script>
  export default {
    name: 'upload-button',
    props: {
      selectedCallback: Function,
      title: String
    },
    data: () => ({
      image: ''
    }),
    methods: {
      OnChange (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
      },
      createImage (file) {
        if (file) {
          const reader = new FileReader();
          const vm = this;
          reader.onload = (e) => {
            vm.image = e.target.result;
            this.$emit('fileUpload',vm.image)
          };
          reader.readAsDataURL(file)
        }
      }
    }
  }
</script>

<style scoped>
  .jbtn-file {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 0 30px;
  }

  .jbtn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
</style>