"use client";

import * as React from 'react';
import Link from 'next/link';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { GridCard } from '@/components/ui/grid-card';

type NavItemType = {
	title: string;
	href: string;
	description?: string;
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
		viewport?: boolean;
	}
>(({ className, children, viewport = true, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		data-slot="navigation-menu"
		data-viewport={viewport}
		className={cn(
			'group/navigation-menu flex max-w-max flex-1 items-center justify-center z-50 relative',
			className,
		)}
		{...props}
	>
		{children}
		{viewport && <NavigationMenuViewport />}
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		data-slot="navigation-menu-list"
		className={cn(
			'group flex flex-1 list-none items-center justify-center gap-1',
			className,
		)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		data-slot="navigation-menu-trigger"
		className={cn(
			'group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50',
			className,
		)}
		{...props}
	>
		{children}{' '}
		<ChevronDownIcon
			className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		data-slot="navigation-menu-content"
		className={cn(
			'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto',
			'group-data-[viewport=false]/navigation-menu:bg-background/80 group-data-[viewport=false]/navigation-menu:text-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-300 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
			className,
		)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className="absolute left-0 top-full flex justify-center">
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center bg-background/95 supports-[backdrop-filter]:bg-background/60 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow backdrop-blur-xl md:w-[var(--radix-navigation-menu-viewport-width)]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link
		ref={ref}
		data-slot="navigation-menu-link"
		className={cn(
			"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col justify-center gap-1 rounded-sm px-4 py-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
			className,
		)}
		{...props}
	/>
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		data-slot="navigation-menu-indicator"
		className={cn(
			'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
			className,
		)}
		{...props}
	>
		<div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

const NavGridCard = React.forwardRef<
	React.ElementRef<typeof Link>,
	Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
		link: NavItemType;
	}
>(({ link, className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link asChild>
		<Link ref={ref} href={link.href} className={cn("block", className)} {...props}>
			<GridCard className="h-full">
				{link.icon && (
					<link.icon className="text-foreground/80 relative size-5" />
				)}
				<div className="relative mt-2">
					<span className="text-foreground/80 text-sm font-medium">
						{link.title}
					</span>
					{link.description && (
						<p className="text-muted-foreground mt-2 text-xs">
							{link.description}
						</p>
					)}
				</div>
			</GridCard>
		</Link>
	</NavigationMenuPrimitive.Link>
));
NavGridCard.displayName = "NavGridCard";

function NavSmallItem({
	item,
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
	item: Omit<NavItemType, 'description'>;
}) {
	return (
		<NavigationMenuLink
			className={cn(
				'group relative h-max flex-row items-center gap-x-3 px-2 py-2',
				className,
			)}
			{...props}
		>
			{item.icon && <item.icon />}
			<p className="text-sm">{item.title}</p>
			<div className="relative ml-auto flex h-full w-4 items-center">
				<ArrowRightIcon className="size-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
			</div>
		</NavigationMenuLink>
	);
}

function NavLargeItem({
	link,
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
	link: NavItemType;
}) {
	return (
		<NavigationMenuLink
			className={cn(
				'bg-background group relative flex flex-col justify-center border p-0',
				className,
			)}
			{...props}
		>
			<div className="flex items-center justify-between px-5 py-4">
				<div className="space-y-1">
					<span className="text-sm leading-none font-medium">{link.title}</span>
					{link.description && (
						<p className="text-muted-foreground line-clamp-1 text-xs">
							{link.description}
						</p>
					)}
				</div>
				{link.icon && <link.icon className="text-muted-foreground size-6" />}
			</div>
		</NavigationMenuLink>
	);
}

function NavItemMobile({
	item,
	className,
	...props
}: React.ComponentProps<typeof Link> & {
	item: NavItemType;
}) {
	return (
		<Link
			className={cn(
				"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground group relative flex gap-1 gap-x-2 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					'bg-muted/20 flex size-10 items-center justify-center rounded-lg border',
				)}
			>
				{item.icon && <item.icon />}
			</div>
			<div className={cn('flex h-10 flex-col justify-center')}>
				<p className="text-sm">{item.title}</p>
				<span className="text-muted-foreground line-clamp-1 text-xs leading-snug">
					{item.description}
				</span>
			</div>
		</Link>
	);
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	NavGridCard,
	NavSmallItem,
	NavLargeItem,
	NavItemMobile,
	type NavItemType,
};
