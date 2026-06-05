# DOU Salary Survey Analytics

Interactive analytics for DOU salary survey data, visualizing programming language popularity trends in the Ukrainian IT industry from 2011 to 2025.

## Project Description

The project consists of two parts:

1. **Normalized data** (`/normalized`) — cleaned and structured CSV files with DOU survey results for each half-year from 2011 to 2025
2. **Interactive web page** (`dou-analysis.html`) — browser-based analytics with an interactive chart, legend, and filters

## Features

- 📊 **Line chart** — programming language popularity trends over 14 years
- 🔍 **Search** — quick search for languages by name
- ✓ **Language selector** — show/hide specific languages on the chart
- 📈 **Two modes** — absolute number of specialists or percentage of total
- 📅 **Two time formats** — by year or by quarter (half-year)
- 🎯 **Top list** — quick selection of top 10, top 20, or all languages

## Data Structure

Each CSV file contains a single `primary_language` column with respondent answers about their primary programming language.

Files are named in the format: `YYYY_MMM.csv`, where:
- `YYYY` — year (2011–2025)
- `MMM` — month/period:
  - `may` (2011–2016)
  - `jun` (2017)
  - `june` (2018–2025)
  - `dec` (all years)

## Language Normalization

The data contained many variations of the same language (e.g., `C#/.NET`, `C# / .NET`, `C#  NET`). For analytics quality, all variations were consolidated into unified groups via a mapping in `language-mapping.js`.

Consolidation examples:
- `C#/.NET`, `C# / .NET`, `C#  NET` → `C#/.NET`
- `Go`, `Golang` → `Go`
- `Bash`, `bash`, `Bash  Shell`, `Bash / Shell` → `Bash`
- `Ruby`, `Ruby/Rails` → `Ruby/Rails`
- All small groups and undefined answers → `Other`

Total unique normalized groups: **61**

## Tech Stack

- **Frontend**: HTML5 + Vanilla JavaScript
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Design**: CSS Grid, dark theme with dark-blue accent
- **Data**: CSV, parsed on-the-fly in the browser

## Data Sources

Data sourced from open DOU.ua surveys:
- [https://github.com/devua/csv](https://github.com/devua/csv)
- Surveys were conducted twice a year (July/June and December)
