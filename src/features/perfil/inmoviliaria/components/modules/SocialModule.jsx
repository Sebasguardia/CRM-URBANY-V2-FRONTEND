import React from 'react';
import Input from '../../../../../shared/components/UI/Input/Input';

const SocialModule = ({ form, onChange }) => {
  return (
    <>
      <Input placeholder="Facebook" value={form.facebook || ''} onChange={(e) => onChange('facebook', e.target.value)} />
      <Input placeholder="YouTube" value={form.youtube || ''} onChange={(e) => onChange('youtube', e.target.value)} />
      <Input placeholder="Twitter" value={form.twitter || ''} onChange={(e) => onChange('twitter', e.target.value)} />
      <Input placeholder="Instagram" value={form.instagram || ''} onChange={(e) => onChange('instagram', e.target.value)} />
    </>
  );
};

export default SocialModule;

