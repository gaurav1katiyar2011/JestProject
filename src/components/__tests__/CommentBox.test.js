import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(()=>{
    wrapped= mount(<CommentBox />);
});
afterEach(()=>{
    wrapped.unmount();
})
describe('')
it('has a text area and button',()=>{
    
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(1);
})

it ('has a text area that user can type it',()=>{
    wrapped.find('textarea').simulate('change',{target:{value:'new comment'}});
    wrapped.update();
    wrapped.find('textarea').prop('value').toEqual("new comment")
})

it('when form is submited, text area gets empty',()=>{
    wrapped.find('textare').simulate('change',{target:{value:'new comment'}})
    wrapped.update()
    wrapped.find('form').simulate('submit');
    wrapped.update();
    wrapped.find('textarea').prop('value').toEqual('');
})