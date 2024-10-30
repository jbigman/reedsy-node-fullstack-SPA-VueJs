import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BookList from '../BookList.vue'

describe('BookList', () => {
  it('renders properly', () => {
    const wrapper = mount(BookList)
    expect(wrapper.text()).toContain('Page 1 of 2')
  })
})
