##### pgdmailform_config.cgi
# 
# pgdmailform.cgi config
# 
# by am@pgd.jp


package PgdMailFormConfig;

##### �e���v���[�g �^�C�v�̐ݒ�

# ���삷��e���v���[�g�^�C�v�̐ݒ�
# 0 ��ݒ肷��Ɨ��p��~
%PgdMailFormConfig::type_available = (
	'default' => 1,
);


##### �ݒu�Ҍ������[���ݒ�

# ���惁�[���A�h���X
%PgdMailFormConfig::mail_to = (
	'default' => 'tm-script_test@pgd.jp',
);

# �T�u�W�F�N�g �e���v���[�g���Ƃɐݒ�
%PgdMailFormConfig::mail_subject = (
	'default' => '���[���t�H�[��',
);

# �ǉ��̈��惁�[���A�h���X(CC)
%PgdMailFormConfig::mail_cc = (
	#'default' => 'tm-script_test_bcc@pgd.jp',
);

# �ǉ��̈��惁�[���A�h���X(BCC)
%PgdMailFormConfig::mail_bcc = (
	#'default' => 'tm-script_test_bcc@pgd.jp',
);


##### �����������[���̐ݒ�

# �e���v���[�g mail_sender.txt �����݂���Ύ����������s��
# �����������s���ꍇ�͈ȉ���ݒ肷�邱��

# From�A�h���X �ݒ肵�Ȃ��ꍇ�́u���[���̈���v�����p�����
%PgdMailFormConfig::mail_sender_to = (
	#'default' => '',
);

# �T�u�W�F�N�g �e���v���[�g���Ƃɐݒ�
%PgdMailFormConfig::mail_sender_subject = (
	'default' => '���[���t�H�[�� �����ԐM',
);

##### ���̑��̐ݒ�

# �e���v���[�g��UTF-8�̏ꍇ�Ƀn�C�t���E�`���_�̕��������΍���s��
$PgdMailFormConfig::utf8_char_fix = 1;
#   �J�b�R�����A���[�}�������͕�����������B
#   Unicode::Japanese ���C���X�g�[������Ă���ΐݒ肵�Ȃ��Ă�����\

1;
