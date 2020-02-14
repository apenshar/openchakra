const ALERT_COMPONENTS: ComponentType[] = [
  'Alert',
  'AlertDescription',
  'AlertIcon',
  'AlertTitle',
]

const TABS_COMPONENTS: ComponentType[] = [
  'Tab',
  'TabList',
  'TabPanels',
  'Tabs',
  'TabPanel',
]

export const COMPONENTS: ComponentType[] = [
  ...ALERT_COMPONENTS,
  'Avatar',
  'AvatarBadge',
  'AvatarGroup',
  'Badge',
  'Box',
  'Button',
  'Checkbox',
  'CircularProgress',
  'CloseButton',
  'Code',
  'Divider',
  'Flex',
  'FormControl',
  'FormLabel',
  'FormHelperText',
  'FormErrorMessage',
  'Grid',
  'Heading',
  'Icon',
  'IconButton',
  'Image',
  'Input',
  'InputGroup',
  'InputRightAddon',
  'InputLeftAddon',
  'Link',
  'List',
  'ListItem',
  'Progress',
  'Radio',
  'RadioGroup',
  'SimpleGrid',
  'Spinner',
  'Select',
  'Stack',
  'Switch',
  ...TABS_COMPONENTS,
  'Tag',
  'Text',
  'Textarea',
  'Accordion',
  'Editable',
  'AspectRatioBox',
  'Breadcrumb',
  'BreadcrumbItem',
  'BreadcrumbLink',
  'Menu',
  'NumberInput',
  'AccordionItem',
  'AccordionHeader',
  'AccordionPanel',
  'AccordionIcon',
  'InputRightElement',
  'InputLeftElement',
  // Allow meta components
  'AlertMeta',
  'FormControlMeta',
  'AccordionMeta',
  'ListMeta',
  'InputGroupMeta',
  'BreadcrumbMeta',
  'TabsMeta',
]

export const AccordionWhitelist: ComponentType[] = COMPONENTS.filter(
  name => !ALERT_COMPONENTS.includes(name),
)

export const TabsWhiteList: ComponentType[] = COMPONENTS.filter(
  name => !ALERT_COMPONENTS.includes(name),
)

export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![
        'AlertIcon',
        'AlertDescription',
        'AlertTitle',
        'AvatarBadge',
        'AccordionHeader',
        'AccordionPanel',
        'AccordionIcon',
      ].includes(name),
  )
