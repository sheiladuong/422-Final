# Write your Readme here; explaining how to use this app

This app parses CSV files into JSON files. It includes a parser to read through a CSV file, convert it into JSON, and create a JSON file. It includes file watching functionality to take a CSV file from an inbound folder, to a processed folder, and to an outbound folder as a JSON file.

Node v22.15.0 is required. 

To run the app, run "node service.js" to create the inbound, outbound, and processed folders. Then place a CSV file of correct format into the inbound folder. Run "node service.js" again to parse the CSV file and convert it into a JSON file. The newly created JSON file will be in the outbounds folder and the processed CSV file will be in the processed folder.
