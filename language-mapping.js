/**
 * Маппінг для консолідації варіацій мов програмування.
 * Вхідне значення → нормалізоване значення
 */
const languageMap = {
  // C#/.NET варіації
  'C#/.NET': 'C#/.NET',
  'C# / .NET': 'C#/.NET',
  'C#  NET': 'C#/.NET',
  'Unity/C#': 'C#/.NET',
  'VBNET': 'C#/.NET',

  // Go варіації
  'Go': 'Go',
  'Golang': 'Go',

  // Ruby варіації
  'Ruby/Rails': 'Ruby/Rails',
  'Ruby': 'Ruby/Rails',

  // Bash варіації (всі в Bash)
  'Bash': 'Bash',
  'Bash  Shell': 'Bash',
  'Bash / Shell / AIR': 'Bash',
  'Bash / Shell': 'Bash',
  'Bash/Shell': 'Bash',
  'Bash,YAML, HCL': 'Bash',
  'Bash, terraform': 'Bash',
  'bash': 'Bash',
  'bash:)': 'Bash',
  'BashShell': 'Bash',
  'bash scripting': 'Bash',
  'powershell': 'PowerShell',
  'Powershell': 'PowerShell',
  'PowerShell': 'PowerShell',

  // Salesforce
  'Salesforce Apex': 'Salesforce',
  'Salesforce': 'Salesforce',
  'Apex': 'Salesforce',

  // Flex/Flash варіації
  'Flex/Flash/AIR': 'Flex/Flash',
  'Flex / Flash / AIR': 'Flex/Flash',
  'Flex  Flash  AIR': 'Flex/Flash',
  'Flex / Flash / AIR': 'Flex/Flash',

  // Delphi/Pascal варіації
  'Delphi': 'Delphi/Pascal',
  'Pascal/Delphi': 'Delphi/Pascal',
  'PascalDelphi': 'Delphi/Pascal',
  'Pascal, SQL': 'Delphi/Pascal',
  'C/AL': 'Delphi/Pascal',
  'C/Side': 'Delphi/Pascal',
  'AL': 'Delphi/Pascal',
  'AL, C/AL': 'Delphi/Pascal',
  'AL Business Central': 'Delphi/Pascal',
  'D365 BC AL': 'Delphi/Pascal',
  'X++ / D365': 'Dynamics 365',
  'X++  D365': 'Dynamics 365',

  // SQL варіації
  'SQL': 'SQL',
  'Мови розробки БД (PL/SQL, Transact-SQL)': 'SQL',
  'Мови розробки БД (PLSQL Transact-SQL)': 'SQL',
  'Oracle PL/SQL': 'SQL',
  'sql dax': 'SQL',
  'Sql, bash': 'SQL',
  'SAS, SQL': 'SQL',

  // DAX/M (Power BI)
  'DAX': 'Power BI/DAX',
  'Dax': 'Power BI/DAX',
  'DAX, M': 'Power BI/DAX',
  'M,DAX,SQL': 'Power BI/DAX',

  // HCL (Terraform)
  'HCL': 'Terraform/HCL',
  'Terraform HCL': 'Terraform/HCL',
  'Terraform': 'Terraform/HCL',
  'HCL YAML': 'Terraform/HCL',
  'Hcl': 'Terraform/HCL',
  'HCL - HashiCorp Configuration Language': 'Terraform/HCL',
  'HashiCorp configuration language': 'Terraform/HCL',

  // Liquid (Shopify)
  'Liquid': 'Liquid',
  'Liquid code': 'Liquid',
  'Shopify Liquid': 'Liquid',
  'liquid': 'Liquid',

  // VB варіації
  'VBA': 'Visual Basic',
  'VBScript': 'Visual Basic',
  'Vbscript': 'Visual Basic',
  'VBS, та різноманітні мови розмітки': 'Visual Basic',
  'VBScript STL FB': 'Visual Basic',
  'Visual Basic': 'Visual Basic',

  // JavaScript варіації (консолідуємо з основним JS)
  'JavaScript': 'JavaScript',
  'Typescript': 'JavaScript/TypeScript',
  'TypeScript': 'JavaScript/TypeScript',
  'TS JS': 'JavaScript/TypeScript',
  'Js+ts': 'JavaScript/TypeScript',
  'JS TS NodeJS': 'JavaScript/TypeScript',
  'Node.js': 'JavaScript/TypeScript',
  'Node js': 'JavaScript/TypeScript',
  'Nodejs': 'JavaScript/TypeScript',
  'Next.js': 'JavaScript/TypeScript',
  'Google Apps Script': 'JavaScript/TypeScript',
  'React  React Native': 'JavaScript',
  'JavaScript (JS) Adobe After Effects': 'JavaScript',

  // PHP варіації (в основному це PHP)
  'PHP': 'PHP',
  'JavaScript PHP': 'PHP',
  'JS PHP': 'JS/PHP',

  // Python варіації
  'Python': 'Python',
  'python': 'Python',
  'Shell, Python': 'Python',

  // YAML варіації
  'YAML': 'YAML',
  'YML': 'YAML',
  'Yml': 'YAML',
  'yaml powershell': 'YAML',

  // JSON/XML
  'HTML/CSS': 'HTML/CSS',
  'Html': 'HTML/CSS',
  'HTML': 'HTML/CSS',
  'HTML-CSS': 'HTML/CSS',
  'HTMLSCSS': 'HTML/CSS',
  'CSS': 'HTML/CSS',
  'SCSS': 'HTML/CSS',

  // Мови без значення / невизначені
  'Не можу обрати одну основну мову': 'Other',
  'Інша': 'Other',
  'Інша мова': 'Other',
  'Інше': 'Other',
  'Other': 'Other',
  'Other (впишіть свій варіант)': 'Other',
  'не використовую': 'Other',
  'не використовую я дизайнер': 'Other',
  'Ніякої': 'Other',
  'Зараз більше Архітектурної роботи': 'Other',
  'Я С розробник але на поточній посаді більше працюю з білд системою чем займаюсь розробкою': 'Other',
  'non-tech': 'Other',
  'Внутрішня мова компанії': 'Other',
  'Тф': 'Other',
  'Power platform': 'Other',
  'Power Platfrom': 'Other',
  'Workday Extend': 'Other',
  'Internal IDE': 'Other',

  // Основні мови - залишаємо як є
  'Elixir': 'Elixir',
  'Erlang': 'Erlang',
  'R': 'R',
  'APL': 'APL',
  'Clojure': 'Clojure',
  'ABAP': 'ABAP',
  'Java (Android)': 'Java',
  'Rust': 'Rust',
  'Groovy': 'Groovy',
  'Groovy JS': 'Groovy',
  'F#': 'F#',
  'Crystal': 'Crystal',
  'Haskell': 'Haskell',
  'SAS': 'SAS',
  'Sas': 'SAS',
  'Scala': 'Scala',
  'Swift': 'Swift',
  'Swift+Kotlin': 'Kotlin',
  'Kotlin': 'Kotlin',
  'C': 'C',
  'C++': 'C++',
  'Perl': 'Perl',
  '1С': '1С',
  'Dart': 'Dart',
  'Solidity': 'Solidity',
  'Objective-C': 'Objective-C',
  'Lua': 'Lua',
  'lua': 'Lua',
  'LUA': 'Lua',
  'Assembler': 'Assembler',
  'MATLAB': 'MATLAB',
  'MuleSoft': 'MuleSoft',
  'Verilog': 'Verilog',
  'Verilog, System Verilog': 'Verilog',
  'SystemVerilog': 'Verilog',
  'BrightScript': 'BrightScript',
  'Brightscript': 'BrightScript',
  'BrightScriptXML': 'BrightScript',
  'Blueprints': 'Blueprints',
  'FlexiLayout Language': 'FlexiLayout',
  'FlexiLayout language': 'FlexiLayout',
  'DataWeave': 'DataWeave',
  'Dataweave': 'DataWeave',
  'DataWeave / MuleSoft': 'DataWeave',
  'Power Fx': 'Power Fx',
  'PowerFx': 'Power Fx',
  'Gosu': 'Gosu',
  'Basic': 'Basic',
  'Rescript (OCaml)': 'OCaml',
  'OCaml': 'OCaml',
  'Escrypt': 'Other',
  'HLSL': 'HLSL',
  'AMPScript': 'Other',
  'Appian': 'Other',
  'Rust та мова, розроблена компанією': 'Rust',
  'PowerBuilder': 'Other',
  'ESQL': 'Other',
  'Low Code': 'Other',
  'hsl': 'HLSL',
  'D': 'Other',
  'ZPL': 'Other',
  'Deluge': 'Other',
  'shell': 'Bash',
  'Ampscript': 'Other',
  'CUE Lang': 'Other',
  'Ada': 'Other',
  'autoit': 'Other',
  'Codeless': 'Other',
  'KQL': 'Other',
  'BASH': 'Bash',
  'SenseTalk': 'Other',
  'Cmd, bash': 'Bash',
  'Outsystems': 'Other',
  'LAD': 'Other',
  'SystemVerilog': 'Verilog',
  'Qlik': 'Other',
  'VHDL': 'VHDL',
  'JS/PHP': 'PHP',
  'ArcGIS Arcade': 'Other',
  'JQL': 'Other',
  'JSONXML': 'Other',
  'Corezoid': 'Other',
  'LabVIEW': 'Other',
  'API': 'Other',
  'JSON': 'Other',
  'LD/ST': 'Other',
  'NodeJS': 'JavaScript/TypeScript',
  'bubble.io': 'Other',
  'Rell': 'Other',
  'Майна': 'Other',
};

// Функція для нормалізації
function normalizeLanguage(lang) {
  if (!lang) return 'Other';
  const normalized = languageMap[lang];
  if (normalized) return normalized;
  // Якщо немає в маппінгу - це малоймовірно, але повертаємо як є
  return lang;
}

module.exports = { languageMap, normalizeLanguage };
