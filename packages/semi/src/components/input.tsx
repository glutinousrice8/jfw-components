import React, { forwardRef } from 'react';
import { Input as SemiInput } from '@douyinfe/semi-ui';
import { Collector } from '@music163/tango-boot';
import { mergeRefs } from '@music163/foundation';

export const Input = forwardRef((props, ref) => {
  return (
    <Collector
      {...props}
      render={({ value, setValue, ref: tangoRef }) => (
        <SemiInput
          ref={mergeRefs(ref, tangoRef)}
          {...props}
          value={value}
          onChange={(v) => setValue(v)}
        />
      )}
    />
  );
});
