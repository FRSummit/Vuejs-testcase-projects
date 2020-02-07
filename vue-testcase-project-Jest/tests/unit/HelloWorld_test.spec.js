import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('Hello world testing case', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('MyComponent', () => {
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
    console.log('It works');
  })

  it('sets the correct default data', () => {
    expect(typeof HelloWorld.data).toBe('function')
    const defaultData = HelloWorld.data()
    expect(defaultData.test).toMatch('init')
    console.log('It works 2')
  })

  it('correctly sets the message when created', () => {
    const vm = new Vue(HelloWorld).$mount()
    expect(vm.test).toBe('Hello')
    console.log('It works 3')
  })

  it('renders the correct message', () => {
    /*const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')*/
    expect(typeof HelloWorld.methods.myFunc).toBe('function')
    console.log('It works 4')
  })
  
  it('check if button is clicked', () => {
    const wrapper = shallowMount(HelloWorld)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.test_text').text()).toMatch('Hello')
    expect(wrapper.find('.test_text').text()).toContain('H')
  })
  
  it('button present 2', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('button').text()).toMatch('Click')
    expect(wrapper.find('button').text()).toContain('C')
  })
})