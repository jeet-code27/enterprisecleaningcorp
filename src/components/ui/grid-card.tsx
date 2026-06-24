import React from 'react';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/ui/grid-pattern';

// Fixed static patterns - no Math.random() on server to avoid SSR hydration mismatch
const STATIC_PATTERNS: [number, number][][] = [
  [[7,1],[9,3],[8,5],[7,2],[10,4]],
  [[8,2],[9,1],[7,4],[10,3],[8,6]],
  [[9,3],[7,5],[8,1],[10,2],[9,4]],
  [[7,6],[8,3],[10,1],[9,5],[7,3]],
  [[10,2],[8,4],[7,1],[9,6],[8,2]],
  [[8,5],[9,2],[10,4],[7,3],[9,1]],
];
let patternIndex = 0;

export function GridCard({
	className,
	children,
	...props
}: React.ComponentProps<'div'>) {
  // Grab a stable pattern at module level (server + client will agree)
  const pattern = STATIC_PATTERNS[patternIndex++ % STATIC_PATTERNS.length];

	return (
		<div
			className={cn(
				'group bg-background relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-sm border px-5 py-4 transition-colors duration-75',
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0">
				<div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent)]">
					<GridPattern
						width={30}
						height={30}
						x={0}
						y={0}
						squares={pattern}
						className="fill-border/50 stroke-border absolute inset-0 size-full translate-y-2 transition-transform duration-150 ease-out group-hover:translate-y-0"
					/>
				</div>
				<div
					className={cn(
						'absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-150 group-hover:opacity-10',
						'bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]',
					)}
				/>
			</div>
			{children}
		</div>
	);
}
