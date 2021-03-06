import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheTicketSection from '~/components/TheTicketSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheTicketSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheTicketSection, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.the-ticket-section').isVisible()).toBeTruthy()
  })
})
