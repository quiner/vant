import Area from '..';
import areaList from '../demo/area.simple';
import { mount, later, triggerDrag } from '../../../test/utils';

test('confirm & cancel event', async() => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  await later();

  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.find('.van-picker__cancel').trigger('click');

  expect(wrapper.emitted('confirm')).toBeTruthy();
  expect(wrapper.emitted('cancel')[0][0]).toBeTruthy();
});

test('watch code', async() => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ areaList });
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ value: '110117' });

  await later();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({
    value: ''
  });
  expect(wrapper).toMatchSnapshot();
});

test('change option', () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList
    }
  });

  const columns = wrapper.findAll('.van-picker-column');
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(0), 0, -100);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(columns.at(2), 0, -100);
  expect(wrapper).toMatchSnapshot();
});

test('getValues method', () => {
  const wrapper = mount(Area, {
    propsData: {
      areaList: {}
    }
  });

  expect(wrapper.vm.getValues()).toBeTruthy();
});
