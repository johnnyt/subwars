require 'rubygems'
require 'bundler/setup'
require 'erb'
require 'ostruct'
require 'sinatra' unless defined?(Sinatra)

%w[ lib models ].each do |dir|
  $LOAD_PATH.unshift("#{File.dirname(__FILE__)}/#{dir}")
  Dir.glob("#{File.dirname(__FILE__)}/#{dir}/*.rb") { |file| require File.basename(file, '.*') }
end

SiteConfig = OpenStruct.new(:title => 'Sinatra App', :url_base => 'http://localhost:4567/')

configure do
  set :views, "#{File.dirname(__FILE__)}/views"
  use MagLevTransactionWrapper
end
