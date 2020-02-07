import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('My Hello World passing', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})


describe('HelloWorld.vue', () => {
  it('Hello World passing methods', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg)
  })
})


describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof HelloWorld.data).toBe('function')
    const defaultData = HelloWorld.data()
    expect(defaultData.message).toBe('hello!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(HelloWorld).$mount()
    expect(vm.message).toBe('bye!')
  })

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})