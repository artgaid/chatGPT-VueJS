<template>
  <div class="lds-ellipsis" :class="classes">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator(value: string) {
      const availableValues = ['primary', 'white', 'green']
      return availableValues.includes(value)
    }
  },

  size: {
    type: String,
    default: 'md',
    validator(value: string) {
      const availableValues = ['xs', 'md', 'lg']
      return availableValues.includes(value)
    }
  },

  isCenteredHorizontally: {
    type: Boolean,
    default: true
  }
})

const classColor = computed(() => `lds_color_${props.color}`)
const classSize = computed(() => `lds_size_${props.size}`)
const classMargin = computed(() => props.isCenteredHorizontally && `lds_margin`)
const classes = computed(() => [classColor.value, classSize.value, classMargin.value])
</script>

<style lang="scss" scoped>
.lds {
  &_margin {
    margin: 0 auto;
  }

  &_size {
    &_xs {
      height: 30px;

      div {
        width: 10px;
        height: 10px;
      }
    }

    &_md {
      height: 40px;

      div {
        width: 13px;
        height: 13px;
      }
    }

    &_lg {
      height: 80px;

      div {
        width: 20px;
        height: 20px;
      }
    }
  }

  &_color {
    &_primary {
      div {
        background: $BL;
      }
    }

    &_white {
      div {
        background: $WHT;
      }
    }

    &_green {
      div {
        background: $GRN;
      }
    }
  }
}

.lds-ellipsis {
  display: flex;
  position: relative;
  width: 70px;

  background-color: transparent;
}
.lds-ellipsis div {
  position: absolute;
  top: 40%;
  border-radius: 50%;
  will-change: transform;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
