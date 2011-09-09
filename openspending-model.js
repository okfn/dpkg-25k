{
  "dataset": {
    "name": "ukgov-25k-spending",
    "label": "UK Departmental Spending", 
    "description": "Consolidated spending reports for all UK departmental spending above GBP 25,000 as released on a monthly basis. Data is available [here](http://ckan.net/package/ukgov-25k-spending), more information on the [Number 10 Transparency](http://transparency.number10.gov.uk/money.php) site",
    "currency": "GBP",
    "temporal_granularity": "month",
    "unique_keys": ["unique_id"]
  },
  "mapping": {
    "amount": {
      "type": "value",
      "label": "Amount",
      "description": "",
      "column": "amount",
      "datatype": "float"
    },
    "vat_amount": {
      "type": "value",
      "label": "Amount of VAT",
      "description": "",
      "column": "vat_amount",
      "datatype": "string"
    },
    "description": {
      "type": "value",
      "label": "Description",
      "description": "A short description of the entry",
      "column": "description",
      "datatype": "string"
    },
    "transaction": {
      "type": "value",
      "label": "Transaction ID",
      "description": "ID on a per-department basis",
      "column": "transaction",
      "datatype": "string"
    },
    "time": {
      "type": "value",
      "label": "Date",
      "description": "",
      "column": "date",
      "datatype": "date"
    },
    "from": {
      "label": "Entity",
      "type": "entity",
      "facet": true,
      "description": "Sub-departmental entity reporting the spending",
      "fields": [
        {"column": "entity", "name": "name", "datatype": "id"},
        {"column": "entity", "name": "label", "datatype": "string"}
      ]
    },
    "department_family": {
      "label": "Department Family",
      "type": "classifier",
      "facet": true,
      "taxonomy": "ukgov-department",
      "description": "Department family reporting the spending",
      "fields": [
        {"column": "department", "name": "label", "datatype": "string"}
      ]
    },
    "account": {
      "label": "Account",
      "type": "classifier",
      "taxonomy": "ukgov-account",
      "fields": [
        {"column": "account", "name": "label", "datatype": "string"}
      ]
    },
    "expense_type": {
      "label": "Expense Type",
      "type": "classifier",
      "taxonomy": "ukgov-expense-type",
      "fields": [
        {"column": "expense_type", "name": "label", "datatype": "string"}
      ]
    },
    "expense_area": {
      "label": "Expense Area",
      "type": "classifier",
      "taxonomy": "ukgov-expense-area",
      "fields": [
        {"column": "expense_area", "name": "label", "datatype": "string"}
      ]
    },
    "expense_area_2": {
      "label": "Expense Area (Secondary)",
      "type": "classifier",
      "taxonomy": "ukgov-expense-area",
      "fields": [
        {"column": "expense_area_2", "name": "label", "datatype": "string"}
      ]
    },
    "to": {
      "label": "Supplier",
      "facet": true,
      "type": "entity",
      "description": "Supplier (company, public body etc.)",
      "fields": [
          {"column": "supplier", "name": "name", "datatype": "id"},
          {"column": "supplier", "name": "label", "datatype": "string"},
          {"column": "supplier_id", "name": "source_id", "datatype": "string"},
          {"column": "vat", "name": "vat", "datatype": "string"},
          {"column": "oc_orig_supplier", "name": "original_name", "datatype":
"string"},
          {"column": "oc_supplier_uri", "name": "opencorporates_uri", "datatype": "string"}
      ]
    },
    "unique_id": {
      "default_value": "", 
      "description": "Nonce Row ID", 
      "column": "unique_id",
      "label": "RowID", 
      "datatype": "string", 
      "type": "value"
    }
  }
}
