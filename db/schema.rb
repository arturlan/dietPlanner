# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170516164141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "foods", force: :cascade do |t|
    t.integer  "ndb_no"
    t.string   "description"
    t.float    "water_g"
    t.float    "kcal"
    t.float    "protein_g"
    t.float    "lipid_total_g"
    t.float    "ash_g"
    t.float    "carbohydrate_g"
    t.float    "fiber_td_g"
    t.float    "sugar_g"
    t.float    "calcium_mg"
    t.float    "iron_mg"
    t.float    "magnesium_mg"
    t.float    "phosphorus_mg"
    t.float    "potassium_mg"
    t.float    "sodium_mg"
    t.float    "zinc_mg"
    t.float    "copper_mg"
    t.float    "manganese_mg"
    t.float    "selenium_ug"
    t.float    "vit_c_mg"
    t.float    "thiamin_mg"
    t.float    "riboflavin_mg"
    t.float    "niacin_mg"
    t.float    "panto_acid_mg"
    t.float    "vit_b6_mg"
    t.float    "folate_tot_ug"
    t.float    "folic_acid_ug"
    t.float    "food_folate_ug"
    t.float    "folate_dfe_ug"
    t.float    "choline_tot_mg"
    t.float    "vit_b12_ug"
    t.float    "vit_a_iu"
    t.float    "vit_a_rae"
    t.float    "retinol_ug"
    t.float    "alpha_carot_ug"
    t.float    "beta_carot_ug"
    t.float    "beta_crypt_ug"
    t.float    "lycopene_ug"
    t.float    "lut_and_zea_ug"
    t.float    "vit_e_mg"
    t.float    "vit_d_ug"
    t.float    "vit_d_iu"
    t.float    "vit_k_ug"
    t.float    "fa_sat_g"
    t.float    "fa_mono_g"
    t.float    "fa_poly_g"
    t.float    "cholestrl_mg"
    t.float    "gmwt_1"
    t.string   "gmwt_desc1"
    t.float    "gmwt_2"
    t.string   "gmwt_desc2"
    t.float    "refuse_pct"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",               default: "email", null: false
    t.string   "uid",                    default: "",      null: false
    t.string   "encrypted_password",     default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.json     "tokens"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

end
