import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BookItem from '../BookItem.vue'

import books from '../../../books.json'

describe('BookItem', () => {
  it('renders properly', () => {
    const wrapper = mount(BookItem, { props: { book: books[0] } })
    expect(wrapper.text()).toContain('In Search of Lost Time')
  })
})
