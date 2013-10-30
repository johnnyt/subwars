task :commit_code do
  Maglev.persistent do
    Maglev.abort_transaction
    # Use load rather than require to force re-reading of the files
    load File.expand_path("../lib/mag_model.rb", __FILE__)
    %w[ player tile ].each do |model|
      load File.expand_path("../app/models/#{model}.rb", __FILE__)
    end

    Maglev.commit_transaction
    puts "== Committed models"
  end
end
