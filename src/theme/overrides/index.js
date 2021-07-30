import { merge } from 'lodash';
import Button from './Button';
import Baseline from './Baseline';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Baseline(theme),
    Button(theme)
  );
}
