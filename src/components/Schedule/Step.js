import React from 'react'
import { css } from 'linaria'

const Step = ({ children, stepGuideClassName = 'h-full' }) => {
  return (
    <div className="relative">
      <div className="flex-none" aria-hidden="true">
        <div
          className={[
            `absolute`,
            css`
              --circle-size: 20px;
              --line-width: 2px;
              &::before {
                content: '';
                position: absolute;
                top: 0;
                left: calc((var(--circle-size) - var(--line-width)) / 2 * -1);
                width: var(--circle-size);
                height: var(--circle-size);
                border-radius: 9999px;
                @apply bg-blue;
              }
              &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                width: var(--line-width);
                height: 100%;
                @apply bg-blue;
              }
            `,
            stepGuideClassName,
          ]}
          aria-hidden="true"
        />
      </div>
      {children}
    </div>
  )
}

export default Step
