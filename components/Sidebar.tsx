import React from 'react';
import { StepIndicator } from './StepIndicator';
import { CompanyLogo, RefreshCw, ShoppingCartIcon, X, ExternalLinkIcon } from './Icons';
import Button from './common/Button';

interface SidebarProps {
  currentStep: number;
  onReset: () => void;
  onCartClick: () => void;
  cartItemCount: number;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentStep,
  onReset,
  onCartClick,
  cartItemCount,
  isOpen,
  onClose
}) => {
  React.useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <aside className={`
      bg-slate-100 border-r border-slate-200/80 flex flex-col
      fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      w-full h-full max-w-full
      lg:relative lg:translate-x-0 lg:w-full lg:h-auto lg:max-w-[350px]
    `}>
      {/* Scrollable content */}
  <div className="relative z-10 flex-1 overflow-y-auto p-8">
        {/* Top Section */}
        <div className="mb-12 flex items-center justify-between">
          <a href="https://dermatics.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <CompanyLogo className="w-28 h-auto" />
          </a>
          <div className="flex items-center gap-2">
            <a href="https://dermatics.in" target="_blank" rel="noopener noreferrer" title="Visit Dermatics.in" className="p-2 rounded-full hover:bg-slate-200 transition-colors">
              <ExternalLinkIcon className="w-6 h-6 text-slate-600" />
            </a>
            <button onClick={onCartClick} className="relative p-2 rounded-full hover:bg-slate-200 transition-colors">
              <ShoppingCartIcon className="w-6 h-6 text-slate-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-xs font-bold text-white shadow-lg">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-800 mb-2 leading-tight">
          AI Skincare Advisor
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mb-10 sm:mb-12">
          Your personalized path to healthier skin, powered by Gemini.
        </p>

        {/* Step Indicator */}
        <div className="mb-8">
          <StepIndicator currentStep={currentStep} />
        </div>

        {/* Start Over Button */}
        <div className="space-y-4">
          <Button
            onClick={onReset}
            variant="primary"
            size="sm"
            className="w-full gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </Button>

          {/* Footer removed as per user request */}
        </div>
      </div>

      {/* Sticky bottom nav — Close button like YouTube */}
  <div className="fixed bottom-0 left-0 w-full z-20 p-4 border-t border-slate-200 bg-slate-100 lg:hidden">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-slate-200 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;